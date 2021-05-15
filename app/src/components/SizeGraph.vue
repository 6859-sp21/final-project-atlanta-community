<template>
  <div id="chart-1" ref="chart1">
    <div id="svg-container-1" ref="svg-container"/>
  </div>
</template>

<script>
import * as d3 from "d3";
import { eventBus } from "../main";

export default {
  name: "SizeGraph",

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
    }
  },

  created: function() {
    eventBus.$on("select-ranking", this.reorder);
  },

  
  beforeDestroy: function() {
    eventBus.$off("select-ranking", this.reorder);
  },

  mounted() {
    this.margin = {top: 20, right: 10, bottom: 20, left: 80};

    this.width = this.$refs.chart1.clientWidth - this.margin.left - this.margin.right;
    this.height = this.$refs.chart1.clientHeight - this.margin.top - this.margin.bottom;

    this.x = d3.scaleLinear()
            .range([this.margin.left, this.width - this.margin.right])
            .nice();

    this.y = d3.scaleBand()
            .range([this.height - this.margin.bottom, this.margin.top])
            .padding(0.1);

    this.color = function (d, selected) {
            if (selected.includes(d.cluster_name)) {
                return '#FF930E';
            }
            return '#ccc';
        }

    this.svg = d3.select("#chart-1").append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    // Clippath for zooming
    this.svg.append("clipPath")
      .attr("id", 'my-clip-path')
      .append("rect")
        .attr("x", -500)
        .attr("y", this.margin.top)
        .attr("width", this.width + 500 + this.margin.left + this.margin.right)
        .attr("height", this.height - this.margin.top - this.margin.bottom)
    
    this.svg.append('rect')
      .attr('class', 'zoom-panel')
      .attr("x", -500)
      .attr("y", this.margin.top)
      .attr('width', this.width)
      .attr('height', this.height)
      .style("opacity", 0);

    const that = this
    //6. Drawing our x-axis
    this.xScale = function(g) {
        g.attr('transform', `translate(15, ${that.height - that.margin.bottom})`)
        .call(d3.axisBottom(that.x))
        .call(g => g.select(".domain").remove())
      }
  
    this.xAxis = this.svg.append('g')
                    .attr("class", "x-axis")
                    .call(this.xScale)

    this.svg.append('text')
      .attr('x', (this.width + this.margin.left) / 2)
      .attr('y', this.height - 5)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr("fill", 'black')
      .text('');

    //7. Drawing our y-axis
    this.yScale = function(g, y) {
      g.attr('transform', `translate(${that.margin.left + 15}, 0)`)
      .call(d3.axisLeft(y).ticks(that.width / 80).tickSizeOuter(0))
    }

    this.yAxis = this.svg.append('g')
      .attr("class", "y-axis")
      .attr('clip-path','url(#my-clip-path)')
      .call(this.yScale, this.y)

    this.svg.append('text')
      .attr('transform', "rotate(-90)")
      .attr('x', -((this.height - this.margin.bottom) / 2) - 50)
      .attr('y', 15)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr("fill", 'black')
      .text('');  

    this.reorder("community_size");

    const zoom = d3.zoom()
      .scaleExtent([1, 32])
      .extent([[that.margin.left, 0], [that.width - that.margin.right, that.height - that.margin.bottom]])
      .translateExtent([[that.margin.left, 0], [that.width - that.margin.right, that.height - that.margin.bottom]])
      .on("zoom", zoomed);
    
    function zoomed(event) {
      that.y.range([that.height - that.margin.bottom, that.margin.top].map(d => event.transform.applyY(d)));
      that.svg.selectAll(".bar")
        .attr('y', d => that.y(d.cluster_name))
        .attr('height', that.y.bandwidth())
      that.yAxis.call(that.yScale, that.y);
    }

    this.svg.call(zoom);
  },

  methods: {
    updateBars(data, selected) {
      // First update the y-axis domain to match data
      this.x.domain([0, d3.max(data, d => d.value)]);
      this.xAxis.transition().duration(1000).call(d3.axisBottom(this.x))

      this.y.domain(data.map(d => d.cluster_name));
      this.yAxis.transition().duration(1000).call(d3.axisLeft(this.y));

      const bars = this.svg
          .selectAll(".bar")
          .data(data)
      
      // Add bars for new data
      const that = this;
      bars.enter()
        .append("rect")
        .attr('clip-path','url(#my-clip-path)')
        .attr("class", "bar")
        .attr('x', that.margin.left + 15)
        .attr('y', d => that.y(d.cluster_name))
        .attr('width', d => that.x(d.value) - that.margin.left)
        .attr('height', that.y.bandwidth())
        .attr('fill', d => that.color(d, selected))

      // Update old ones, already have x / width from before
      bars
        .transition().duration(250)
        .attr('x', that.margin.left + 15)
        .attr('y', d => that.y(d.cluster_name))
        .attr('width', d => that.x(d.value) - that.margin.left)
        .attr('height', that.y.bandwidth())
        .attr('fill', d => that.color(d, selected))

      // Remove old ones
      bars.exit().remove();
    },

    reorder(selected) {
      d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
        data.forEach(d => d.value = parseFloat(d[selected]));
        data.sort((a, b) => a.value - b.value);
        data.forEach((d, i) => d.Rank = i + 1);
        selected = [];
        this.updateBars(data, selected);
      })
    }
  }
}
</script>

<style scoped>
#chart-1 {
  height: 90%;
  width: 90%;
}
</style>