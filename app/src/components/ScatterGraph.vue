<template>
  <div id="chart-3" ref="chart3">
    <div id="svg-container-3" ref="svg-container-3"/>
  </div>
</template>

<script>
import * as d3 from "d3";
import { eventBus } from "../main";

export default {
  name: "ScatterGraph",

  props: ['clusters'],

  data() {
    return {
      margin: null,
      width: null,
      height: null,
      x: null,
      y: null,
      color: null,
      svg: null,
      xAxis: null,
      yAxis: null,
      xScale: null,
      yScale: null,
      xText: "",
      yText: "",
      storedData: null,
      r: null,
    }
  },

  created: function() {
    eventBus.$on("select-factors", this.updateScatterPlot);
  },

  
  beforeDestroy: function() {
    eventBus.$off("select-factors", this.updateScatterPlot);
  },

  mounted() {
    this.margin = {top: 20, right: 20, bottom: 50, left: 70};

    this.width = this.$refs.chart3.clientWidth;
    this.height = this.$refs.chart3.clientHeight;

    this.r = d3.scaleLinear()
      .range([2, 20]);

    this.x = d3.scaleLinear()
        .range([this.margin.left, this.width -this.margin.right]);

    this.y = d3.scaleLinear()
        .range([this.height - this.margin.bottom, this.margin.top]);

    this.svg = d3.select("#chart-3").append("svg")
      .attr("width", this.width)
      .attr("height", this.height)

    // color scaler
    const categories = ['atlanta', 'society', 'entertainment', 'sports']
    const colors_list = ["#FFBF00", "#FF7F50", "#6495ED", "#808000"]
    // const colors_list = ["#FFBF00", "#FF7F50", "#000000", "#808000", "#00FF00", "#6495ED", "#000080", "#800080", "#808080", "#FF0000"]
    this.color = d3.scaleOrdinal()
      .domain(categories)
      .range(colors_list)

    const that = this

    // Legend
    this.svg.selectAll("mydots")
      .data(categories)
      .enter()
      .append("circle")
      .attr("class", "mydots")
      .attr("cx", that.width - that.margin.right - 100)
      .attr("cy", function(d,i){ return that.margin.top + i*25})
      .attr("r", 7)
      .style("fill", function(d){ return that.color(d)})

    this.svg.selectAll("mylabels")
        .data(categories)
        .enter()
        .append("text")
        .attr("class", "mylabels")
        .attr("x", that.width - that.margin.right - 82)
        .attr("y", function(d,i){ return that.margin.top + i*25 + 5})
        .style("fill", function(d){ return that.color(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")

    //6. Drawing our x-axis
    this.xAxis = this.svg.append('g')
                    .attr("class", "x-axis")
                    .attr("transform", `translate(0, ${that.height - that.margin.bottom})`)
                    .call(d3.axisBottom(that.x))

    this.xText = this.xAxis.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('x', (this.width - this.margin.right) / 2)
      .attr('y', 40)
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr("fill", 'white')
      .text('');

    //7. Drawing our y-axis
    this.yAxis = this.svg.append('g')
      .attr("class", "y-axis")
      .attr("transform", `translate(${that.margin.left}, 0)`)
      .call(d3.axisLeft(that.y));

    this.yText = this.yAxis.append('text')
      .attr('transform', "rotate(-90)")
      .attr('text-anchor', 'middle')
      .attr('x', -((this.height - this.margin.bottom) / 2) - 10)
      .attr('y', -40)
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr("fill", 'white')
      .text('');  

    d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
      this.storedData = data;
      console.log(this.storedData);
      this.updateScatterPlot("community_size", "semantic_change", "all")
    });
    
    // this.svg.append('rect')
    //   .attr('class', 'zoom-panel')
    //     .attr("x", 0)
    //     .attr("y", 0)
    //     .attr("width", this.width)
    //     .attr("height", this.height)
    //   .style("opacity", 0.2);
  },

  methods: {
    updateScatterPlot(factor1, factor2, category) {
      console.log(factor1, factor2, category);
      const that = this;
      // First update the y-axis domain to match data
      const data = (category != "all") ? that.storedData.filter((d) => d.category == category) : that.storedData
      console.log(that.storedData);
      console.log(data);

      this.x.domain([0, d3.max(data, (d) => parseFloat(d[factor1]))])
      this.xAxis.transition().duration(1000).call(d3.axisBottom(this.x))
      this.xText.text(factor1);

      this.y.domain([0, d3.max(data, (d) => parseFloat(d[factor2]))])
      this.yAxis.transition().duration(1000).call(d3.axisLeft(this.y));
      this.yText.text(factor2);

      const dots = this.svg
          .selectAll(".dot")
          .data(data.filter(function(d,i){return i<1500}))

      console.log("Here");
      this.r.domain([0, d3.max(data, (d) => parseFloat(d['community_size']))])
      
      // Add bars for new data
      dots.enter()
        .append("circle")
        .attr("class", 'dot')
        .attr("r", 5)
        .style("fill", "#e25609")
        .style("opacity", 0)
        .style("stroke", "white")
        .attr("cx", that.margin.left)
        .attr("cy", that.height - that.margin.bottom)
        .on("mouseover", function(event, d) {
          console.log("over");
          console.log(event);
          const clusterName = d.cluster_name;
          const topicWords = d.topic_words;
          eventBus.$emit('show-tooltip-3', clusterName, topicWords);
        })
        .on("mouseout", function() {
          console.log("out");
          eventBus.$emit('hide-tooltip-3');
        })
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(2000)
        .attr("cx", function (d) { return that.x(d[factor1]); } )
        .attr("cy", function (d) { return that.y(d[factor2]); } )
        .attr("r", function (d) { return that.r(d["community_size"]); })
        .style("fill", function(d){ return that.color(d['category']) })
        .attr("stroke", function(d){ return that.color(d['category']) })
        .style("opacity", 0.8)
      
      //https://stackoverflow.com/questions/22645162/d3-when-i-add-a-transition-my-mouseover-stops-working-why

      console.log("Here");
      // // Update old ones
      dots
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(2000)
        .attr("cx", function (d) { return that.x(d[factor1]); } )
        .attr("cy", function (d) { return that.y(d[factor2]); } )
        .attr("r", function (d) { return that.r(d["community_size"]); })
        .style("fill", function(d){ return that.color(d['category']) })
        .attr("stroke", function(d){ return that.color(d['category']) })
      
      console.log("Here");
      // Remove old ones
      dots
        .exit()
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(2000)
        .attr("cx", that.margin.left)
        .attr("cy", that.height - that.margin.bottom)
        .style("opacity", 0)
        .remove();
      console.log("Here");
    },
  }
}
</script>

<style scoped>
#chart-3 {
  height: 90%;
  width: 90%;
}
</style>