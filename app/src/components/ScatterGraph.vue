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
    }
  },

  created: function() {
    eventBus.$on("select-factors", this.updateScatterPlot);
  },

  
  beforeDestroy: function() {
    eventBus.$off("select-factors", this.updateScatterPlot);
  },

  mounted() {
    this.margin = {top: 20, right: 10, bottom: 20, left: 80};

    this.width = this.$refs.chart3.clientWidth - this.margin.left - this.margin.right;
    this.height = this.$refs.chart3.clientHeight - this.margin.top - this.margin.bottom;

    this.x = d3.scaleLinear()
        .range([ 0, this.width ]);

    this.y = d3.scaleLinear()
        .range([ this.height - 50, 0]);

    this.svg = d3.select("#chart-3").append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    const that = this

    //6. Drawing our x-axis
    this.xAxis = this.svg.append('g')
                    .attr("class", "x-axis")
                    .attr("transform", "translate(0," + (that.height - 50) + ")")
                    .call(d3.axisBottom(that.x))

    this.xText = this.svg.append('text')
      .attr('x', (this.width + this.margin.left) / 2)
      .attr('y', this.height - 5)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr("fill", 'black')
      .text('');

    //7. Drawing our y-axis
    this.yAxis = this.svg.append('g')
      .attr("class", "y-axis")
      .call(d3.axisLeft(that.y));

    this.yText = this.svg.append('text')
      .attr('transform', "rotate(-90)")
      .attr('x', -((this.height - this.margin.bottom) / 2) - 50)
      .attr('y', -50)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr("fill", 'black')
      .text('');  

    d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
      this.storedData = data;
      console.log(this.storedData);
      this.updateScatterPlot("community_size", "lexical_change", "all")
    });

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
      
      // Add bars for new data
      dots.enter()
        .append("circle")
        .attr("class", 'dot')
        .attr("r", 5)
        .style("fill", "#e25609")
        .style("opacity", 0.3)
        .style("stroke", "white")
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
      
      //https://stackoverflow.com/questions/22645162/d3-when-i-add-a-transition-my-mouseover-stops-working-why

      console.log("Here");
      // // Update old ones
      dots
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(2000)
        .attr("cx", function (d) { return that.x(d[factor1]); } )
        .attr("cy", function (d) { return that.y(d[factor2]); } )
      
      console.log("Here");
      // Remove old ones
      dots.exit().remove();
      console.log("Here");
    },
  }
}
</script>

<style scoped>
#chart-3 {
  height: 100%;
  width: 90%;
}
</style>