<template>
  <div id="chart" ref="chart">
    <Tooltip :data="tipData" :visible="tipVisible"/>
    <div id="svg-container" ref="svg-container"/>
  </div>
</template>

<script>
import * as d3 from "d3";
import Tooltip from "../components/Tooltip.vue";
import { eventBus } from "../main";

export default {
  name: "BarGraph",

  components: {
    Tooltip
  },

  props: ['clusters'],

  data() {
    return {
      tipData: {
        category: "dddd",
        alc: "www",
      },
      tipVisible: false,
      margin: null,
      width: null,
      height: null,
      x: null,
      y: null,
      color: null,
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

    this.svg = d3.select("#chart").append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.showBarGraph();
  },

  methods: {
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
          .on("click", function(event, d) {
            console.log(event);
            const data = that.clusters.filter(e => e.category == d.category)
            that.showCheckbox({"category" : d.category, "options" : data})
            console.log(data);
          })
          .on("mouseover", function(event, d) {
            console.log("over");
            that.tipData.category = d.category;
            that.tipData.alc = d.alc;
            d3.selectAll(".tooltip")
              .style("left", (event.pageX - 100) + "px") 
              .style("top", (event.pageY - 200) + "px")
              .transition()
              .duration(500)
              .style("opacity", "1");
          })
          .on("mouseout", function() {
            console.log("out");
             d3.selectAll(".tooltip")
              .transition()
              .duration(500)
              .style("opacity", "0");
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
    },

    showCheckbox(data) {
      eventBus.$emit('show-checkbox', data);
    }
  }
}
</script>

<style scoped>
#chart {
  height: 80%;
  width: 80%;
}
</style>