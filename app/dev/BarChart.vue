<template>
  <div class="page">
    <div id="left">
      <b-form-select 
        @change="showTweets"
        v-model="selectedUsers" :options="allUsers"></b-form-select>
      <div id="twitter">
        <a class="twitter-timeline"
          v-bind:href="'https://twitter.com/'+ selectedUsers">
        Tweets by @{{ selectedUsers }}
        </a>
      </div>
    </div>

    <div id="right" ref="right">
      <div id="chart" ref="chart"/>
      <b-form-group id="checkbox" ref="checkbox" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-1"
        ></b-form-checkbox-group>
      </b-form-group>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "BarChart",

  data() {
    return {
      title: "Exploring patterns of language variation on social media",
      selected: [],
      clusters: [],
      options: [],
      selectedUsers: null,
      allUsers: [
        { value: 'POTUS', text: 'POTUS' },
        { value: 'rihanna', text: 'rihanna' },
        { value: 'TheEllenShow', text: 'TheEllenShow' },
        { value: 'AtlantaFalcons', text: 'AtlantaFalcons' },
      ],
      checkbox: false,
      margin: null,
      width: null,
      height: null,
      x: null,
      y: null,
      color: null,
      tooltip: null,
      svg: null
    }
  },

  mounted() {
    this.margin = {top: 20, right: 20, bottom: 70, left: 40};

    this.width = this.$refs.chart.clientWidth - this.margin.left - this.margin.right;
    this.height = this.$refs.chart.clientHeight - this.margin.top - this.margin.bottom;

    this.x = d3.scaleBand()
        .padding(0.85)
        .rangeRound([0, this.width]);

    this.y = d3.scaleLinear() 
        .range([this.height, 0]); 

    this.color = d3.schemeCategory10;

    this.tooltip = d3.select("#chart").append("div")   
            .attr("class", "tooltip")               
            .style("opacity", 0);

    this.svg = d3.select("#chart").append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.showBarGraph();

    d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
      const that = this;
      data.forEach(function(d) {
        that.clusters.push({ text: d.cluster_name, value: d.cluster_name, category: d.category });
      });
      console.log(this.clusters)
    })
  },

  methods: {
    showTweets() {
    },

    showBarGraph(){
      d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/category_avg.csv").then((data) => {
        data.forEach(function(d) {
            d.alc = +d.avg_lex_change;
        });
        console.log("data", data);
          
        this.x.domain(data.map(function(d) { return d.category; }));
        this.y.domain([0, 0.05 + d3.max(data, function(d) { return d.alc; })]);

        this.svg.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + this.height + ")")
          .call(d3.axisBottom(this.x))
          .selectAll("text")
          .attr("y", 23)
          .attr("x", 9)
          .attr("dy", "-2em")
          .attr("transform", "rotate(90)")
          .style("text-anchor", "start");

        this.svg.append("g")
          .attr("class", "axis axis--y")
          .call(d3.axisLeft(this.y))
          .append("text")
          //.attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "0em")
          .attr("text-anchor", "end")
          .text("Average Lexical Change");

        const bars = this.svg.selectAll(".bar").data(data)
        const that = this;

        bars.enter()
          .append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return that.x(d.category); })
          .attr("y", function(d) { return that.y(d.alc); })
          .attr("width", 20)
          .attr("height", function(d) { return that.height - that.y(d.alc); })
          .style("fill", "#ccc")
          .on("click", function (event, d) {
            console.log(that.clusters);
            console.log(event, d);
            that.options = that.clusters.filter(e => e.category == d.category)
            console.log(that.options);

            that.height = that.$refs.right.clientHeight - that.$refs.checkbox.clientWidth - that.margin.top - that.margin.bottom;
            that.svg.attr("width", that.width + that.margin.left + that.margin.right)
              .attr("height", that.height + that.margin.top + that.margin.bottom)
              .attr("transform", "translate(" + that.margin.left + "," + that.margin.top + ")");

            d3.select("#checkbox").style("visibility", "visible");
          })
          .on("mouseover", function(event, d) {
            console.log("over");
            that.tooltip.transition()
              .duration(200)
              .style("opacity", .9);
            that.tooltip.html(d.category + " " + d.alc)
              .style("left", (event.pageX + 20) + "px") 
              .style("top", (event.pageY + 20) + "px");
          })
          .on("mouseout", function() {
            console.log("out");
            that.tooltip.transition()
              .duration(500)
              .style("opacity", 0);
          })


        var sum = d3.sum(data, function(d) { return d.alc; }); 
        var average = sum/data.length;

        this.svg.append("path")
          .attr("class", "mean")
          .attr('d', d3.line()([[0, that.y(average)], [that.width, that.y(average)]]))
          .attr('stroke', 'black')

        this.svg.append("text")
            .attr("transform", "translate(" + (this.width+3) + "," + this.y(average) + ")")
            .attr("dy", "1em")
            .attr("text-anchor", "end")
            .style("fill", "red")
            .html("Average = $" + average);
        })

    }
  }
}
</script>

<style scoped>
.page {
  height: 100vh;
  border: 1px #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#left {
  height: 100%;
  width: 20%;
  padding: 1em;
}

#twitter {
  height: 80%;
  display: flex;
  overflow: auto;
}

#right {
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#chart {
  height: 80%;
  width: 80%;
}

#checkbox {
  background: #9dc1c7;
  height: auto;
  width: 80%;
  padding: 1em;
  visibility: hidden;
}
</style>