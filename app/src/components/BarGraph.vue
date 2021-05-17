<template>
  <div id="chart-1" ref="chart1">
    <div id="svg-container-1" ref="svg-container"/>
  </div>
</template>

<script>
import * as d3 from "d3";
import { eventBus } from "../main";

export default {
  name: "BarGraph",

  props: ['clusters'],

  data() {
    return {
      margin: null,
      margin2: null,
      width: null,
      width2: null,
      height: null,
      x: null,
      y: null,
      x2: null,
      y2: null,
      svg: null,
      xAxis: null,
      yAxis: null,
      xScale: null,
      yScale: null,
      brush: null,
      brushArea: null,
      content: null,
      focus: null,
      xText: "",
    }
  },

  created: function() {
    eventBus.$on("select-ranking", this.reorder);
  },

  
  beforeDestroy: function() {
    eventBus.$off("select-ranking", this.reorder);
  },

  mounted() {
    this.margin = {top: 20, right: 10, bottom: 50, left: 300};
    this.margin2 = {top: 20, right: 5, bottom: 50, left: 50};
    this.width2 = 75;

    this.width = this.$refs.chart1.clientWidth - this.margin2.left - this.width2 - this.margin2.right;
    this.height = this.$refs.chart1.clientHeight;

    this.x = d3.scaleLinear()
            .range([this.margin.left, this.width - this.margin.right])
            .nice();

    this.y = d3.scaleBand()
            .range([this.height - this.margin.bottom, this.margin.top])
            .padding(0.1);
    
    this.x2 = d3.scaleLinear()
            .range([this.margin2.left, this.width2 - this.margin2.right])
            .nice();

    this.y2 = d3.scaleBand()
            .range([this.height - this.margin.bottom, this.margin.top])
            .padding(0.1);

    this.svg = d3.select("#chart-1")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)

    // this.svg.append('rect')
    //   .attr('class', 'zoom-panel')
    //     .attr("x", this.margin.left + this.width2)
    //     .attr("y", this.margin.top)
    //     .attr("width", this.width - this.margin.left - this.margin.right)
    //     .attr("height", this.height - this.margin.top - this.margin.bottom)
    //   .style("opacity", 0.5);

    // this.svg.append('rect')
    //   .attr('class', 'zoom-panel')
    //     .attr("x", this.margin2.left)
    //     .attr("y", this.margin.top)
    //     .attr("width", this.width2 - this.margin2.left - this.margin2.right)
    //     .attr("height", this.height - this.margin.top - this.margin.bottom)
    //   .style("opacity", 0.5);

    this.content = this.svg
      .append("g")
      .attr("transform", "translate(" + 0 + "," + 0 + ")");

    this.focus = this.svg
      .append("g")
      .attr("transform", "translate(" + this.width2 + "," + 0 + ")");

    const that = this

    // https://observablehq.com/@d3/focus-context
    // https://bl.ocks.org/SevenChan07/495cd567e0ede0deeb14bb3599dce685
    this.brush = d3.brushY()
    .extent([[this.margin2.left - this.margin2.right, this.margin.top], [this.width2, this.height - this.margin.bottom]])
    .on("brush", brushed)
    .on("end", brushended);

    
    this.brushArea = this.content.append("g")
        .attr("class", "brush")

    function brushed(event) {
      const selection = event.selection;
      if (selection) {
        // get bounds of selection
        const  nD = [];
        that.y2.domain().forEach((d)=>{
          var pos = that.y2(d) + that.y2.bandwidth()/2;
          if (pos > selection[0] && pos < selection[1]){
            nD.push(d);
          }
        }); 

        that.y.domain(nD);
        that.svg.selectAll(".bar")
          .attr('y', d => that.y(d.cluster_name))
          .attr('height', that.y.bandwidth())
        that.yAxis.call(that.yScale, that.y);
      }
    }

    function brushended({selection}) {
      if (!selection) {
        that.brushArea        
          .call(that.brush)
          .call(that.brush.move, [that.margin.top, that.height - that.margin.bottom]);
      }
    }

    //6. Drawing our x-axis
    this.xScale = function(g) {
      g.attr('transform', `translate(0, ${that.height - that.margin.bottom})`)
      .call(d3.axisBottom(that.x))
      .call(g => g.select(".domain").remove())
    }
  
    this.xAxis = this.focus.append('g')
                    .attr("class", "x-axis")
                    .call(this.xScale)

    this.xText = this.focus.append('text')
      .attr('x', that.width / 2)
      .attr('y', that.height - 5)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr("fill", 'White')
      .text('');
    
    //7. Drawing our y-axis
    this.yScale = function(g, y) {
      g.attr('transform', `translate(${that.margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(that.width / 80).tickSizeOuter(0))
    }

    this.yAxis = this.focus.append('g')
      .attr("class", "y-axis")
      .call(this.yScale, this.y)

    this.content.append('text')
      .attr("class", "y-label")
      .attr('transform', "rotate(-90)")
      .attr('x', -((this.height - this.margin.bottom) / 2) - 50)
      .attr('y', 15)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr("fill", 'White')
      .text('cluster name');  

    this.reorder("community_size");

    // const zoom = d3.zoom()
    //   .scaleExtent([1, 32])
    //   .extent([[that.margin.left, 0], [that.width - that.margin.right, that.height - that.margin.bottom]])
    //   .translateExtent([[that.margin.left, 0], [that.width - that.margin.right, that.height - that.margin.bottom]])
    //   .on("zoom", zoomed);
    
    // function zoomed(event) {
    //   that.y.range([that.height - that.margin.bottom, that.margin.top].map(d => event.transform.applyY(d)));
    //   that.svg.selectAll(".bar")
    //     .attr('y', d => that.y(d.cluster_name))
    //     .attr('height', that.y.bandwidth())
    //   that.yAxis.call(that.yScale, that.y);
    // }

    // this.focus.call(zoom);
  },

  computed: {
    chartHeight () {
      return this.$refs.chart1.clientHeight
    },
    chartWidth () {
      return this.$refs.chart1.clientWidth
    }
  },

  methods: {
    updateBars(data) {
      // First update the y-axis domain to match data
      this.x.domain([0, d3.max(data, d => d.value)]);
      this.xAxis.transition().duration(1000).call(d3.axisBottom(this.x))

      this.y.domain(data.map(d => d.cluster_name));
      this.yAxis.transition().duration(1000).call(d3.axisLeft(this.y));

      this.x2.domain([0, d3.max(data, d => d.value)]);
      this.y2.domain(data.map(d => d.cluster_name));

      const bars = this.focus
          .selectAll(".bar")
          .data(data)
      
      // Add bars for new data
      const that = this;
      bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("id", d => d.cluster_name)
        .attr('x', that.margin.left)
        .attr('y', d => that.y(d.cluster_name))
        .attr('width', d => that.x(d.value))
        .attr('height', that.y.bandwidth())
        .attr('fill', "#1da1f2")

      // Update old ones, already have x / width from before
      bars
        .transition().duration(250)
        .attr('x', that.margin.left)
        .attr('y', d => that.y(d.cluster_name))
        .attr('width', d => that.x(d.value))
        .attr('height', that.y.bandwidth())
        .attr('fill', "#1da1f2")

      // Remove old ones
      bars.exit().remove();

      const bars2 = this.content
        .selectAll(".bar2")
        .data(data)

      // Add bars for new data
      bars2.enter()
        .append("rect")
        .attr("class", "bar2")
        .attr('x', that.margin2.left)
        .attr('y', d => that.y(d.cluster_name))
        .attr('width', d => that.x2(d.value) - that.margin2.left)
        .attr('height', that.y.bandwidth())
        .attr('fill', "#1da1f2")

      // Update old ones, already have x / width from before
      bars2
        .transition().duration(250)
        .attr('x', that.margin2.left)
        .attr('y', d => that.y(d.cluster_name))
        .attr('width', d => that.x2(d.value) - that.margin2.left)
        .attr('height', that.y.bandwidth())
        .attr('fill', "#1da1f2")

      // Remove old ones
      bars2.exit().remove();

      this.brushArea        
        .call(that.brush)
        .call(that.brush.move, [this.margin.top, this.height - this.margin.bottom]);
    },

    reorder(selected) {
      d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
        this.xText.text(selected);
        data.forEach(d => d.value = parseFloat(d[selected]));
        data.sort((a, b) => a.value - b.value);
        data.forEach((d, i) => d.Rank = i + 1);
        selected = [];
        this.updateBars(data);
      })
    }
  }
}
</script>

<style scoped>
#chart-1 {
  height: 100%;
  width: 100%;
}
</style>