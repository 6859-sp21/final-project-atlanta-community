<template>
  <div id="chart-2" ref="chart2">
    <div id="svg-container-2"/>
  </div>
</template>

<script>
import * as d3 from "d3";
import { eventBus } from "../main";

export default {
  name: "CircleGraph",

  data() {
    return {
      width: null,
      height: null,
      color: null,
      svg: null,
      root: null,
      focus: null,
      view: null,
      label: null,
      storedData: null,
      node: null,
    }
  },

  created: function() {
    eventBus.$on("select-ranking", this.update);
  },

  
  beforeDestroy: function() {
    eventBus.$off("select-ranking", this.update);
  },

  mounted() {
    this.width = this.$refs.chart2.clientWidth;
    this.height = this.$refs.chart2.clientHeight;

    console.log(this.width, this.height);

    this.width = Math.min(this.width, this.height);
    this.height = this.width;

    console.log(this.width, this.height);

    this.color = d3.scaleLinear()
      .domain([0, 5])
      .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
      .interpolate(d3.interpolateHcl)

    const that = this;
    console.log(that.width, that.height);

    this.svg = d3.select("#chart-2").append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("viewBox", `-${that.width / 2} -${that.height / 2} ${that.width} ${that.height}`)
      .style("background", that.color(0))
      .style("cursor", "pointer")
      .on("click", (event) => that.zoom(event, that.root));

    this.node = this.svg.append("g");
    this.label = this.svg.append("g")
      .style("font", "10px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle");
    
    d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
      this.storedData = data;
      this.update("community_size");
    });
  },

  methods: {
    pack(data) {
      const p = d3.pack()
              .size([this.width, this.height])
              .padding(3)
      return p(d3.hierarchy(data)
              .sum(d => d.value)
              .sort((a, b) => b.value - a.value))
    },

    update(selected) {
      const groupMap = new Map();
      const categoryMap = new Map();
      
      this.storedData.forEach(d => {
        if (!groupMap.get(d.cluster_group)) {
          groupMap.set(d.cluster_group, [{name: d.cluster_name, value: parseFloat(d[selected])}])
        } else {
          groupMap.get(d.cluster_group).push({name: d.cluster_name, value: parseFloat(d[selected])});
        }
        if (!categoryMap.get(d.category)) {
          const group = new Set();
          group.add(d.cluster_group)
          categoryMap.set(d.category, group)
        } else {
          categoryMap.get(d.category).add(d.cluster_group);
        }
      });

      const categories = [];
      categoryMap.forEach((value, key) => {
        const groups = []
        value.forEach(group => {
          groups.push({name: group, children: groupMap.get(group)});
        });
        categories.push({name: key, children: groups});
      });

      const newData = {name: "Atlanta", children: categories};
      console.log(newData);

      this.root = this.pack(newData);
      this.focus = this.root;

      // https://bl.ocks.org/HarryStevens/4fba7a62b0ff302ef49768198d4c54c6

      if (this.node) {
        this.node.remove();
      }

      if (this.label) {
        this.label.remove();
      }

      const that = this;
      this.node = this.svg.append("g")
        .selectAll("circle")
        .data(that.root.descendants().slice(1))
        .join("circle")
          .attr("fill", d => d.children ? that.color(d.depth) : "white")
          .attr("pointer-events", d => !d.children ? "none" : null)
          .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
          .on("mouseout", function() { d3.select(this).attr("stroke", null); })
          .on("click", (event, d) => that.focus !== d && (that.zoom(event, d), event.stopPropagation()));

      this.label = this.svg.append("g")
        .style("font", "10px sans-serif")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
      .selectAll("text")
      .data(that.root.descendants())
      .join("text")
        .style("fill-opacity", d => d.parent === that.root ? 1 : 0)
        .style("display", d => d.parent === that.root ? "inline" : "none")
        .text(d => d.data.name);

      this.zoomTo([that.root.x, that.root.y, that.root.r * 2]);
    },

    zoomTo(v) {
      const k = this.width / v[2];

      this.view = v;

      this.label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      this.node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      this.node.attr("r", d => d.r * k);
    },

    zoom(event, d) {
      this.focus = d;

      const that = this;

      const transition = this.svg.transition()
          .duration(event.altKey ? 7500 : 750)
          .tween("zoom", d => {
            console.log(d);
            const i = d3.interpolateZoom(that.view, [that.focus.x, that.focus.y, that.focus.r * 2]);
            return t => that.zoomTo(i(t));
          });

      this.label
        .filter(function(d) { return d.parent === that.focus || this.style.display === "inline"; })
        .transition(transition)
          .style("fill-opacity", d => d.parent === that.focus ? 1 : 0)
          .on("start", function(d) { if (d.parent === that.focus) this.style.display = "inline"; })
          .on("end", function(d) { if (d.parent !== that.focus) this.style.display = "none"; });
    },

  }
}
</script>

<style scoped>
#chart-2 {
  height: 90%;
  width: 90%;
}
</style>