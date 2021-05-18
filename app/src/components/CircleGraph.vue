<template>
  <div id="chart-2" ref="chart2">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div id="svg-container-2"/>
  </div>
</template>

<script>
import * as d3 from "d3";

import { eventBus } from "../main";
// https://bl.ocks.org/feifang/664c0f16adfcb4dea31b923f74e897a0

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
      parents: null,
      followings: null,
      items: [
        {
          text: 'All',
        },
      ],
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
    this.height = this.$refs.chart2.clientHeight - 20;

    // this.width = Math.min(this.width, this.height);
    // this.height = this.width;

    this.color = d3.scaleLinear()
      .domain([0, 5])
      .range(["rgb(6,103,162)", "#7bbbe3"])
      .interpolate(d3.interpolateHcl)

    const that = this;

    this.svg = d3.select("#chart-2").append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("viewBox", `-${that.width / 2} -${that.height / 2} ${that.width} ${that.height}`)
      .style("cursor", "pointer")
      .on("click", (event) => that.zoom(event, that.root));

    this.node = this.svg.append("g");
    this.label = this.svg.append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle");
    
    d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
      const groupMap = new Map();
      const categoryMap = new Map();

      this.parents = new Map();
      this.followings = new Map();
      
      data.forEach(d => {
        const followings = [];
        d.top_follows.split(",").forEach(f =>{
          followings.push({name: f, 
                          community_size: parseFloat(d.community_size) / 25,
                          semantic_change: parseFloat(d.semantic_change) / 25,
                          ideology_semantic_change: parseFloat(d.ideology_semantic_change)  / 25,
                          friends_count_median: parseFloat(d.friends_count_median)  / 25,
                          follower_count_mean: parseFloat(d.follower_count_mean)  / 25,
                          favorite_count_mean: parseFloat(d.favorite_count_mean)  / 25,
                          is_org: parseFloat(d.is_org)  / 25,
                          age: parseFloat(d.age)  / 25,
                          gender: parseFloat(d.gender)  / 25,
                          betweenness: parseFloat(d.betweenness)  / 25,
                          closeness: parseFloat(d.closeness)  / 25,
                          tweet_count_mean: parseFloat(d.tweet_count_mean)  / 25,
          });
        });
        if (!groupMap.get(d.cluster_group)) {
          groupMap.set(d.cluster_group, 
          [{name: d.cluster_name, 
            children: followings,
            }])
        } else {
          groupMap.get(d.cluster_group).push({name: d.cluster_name, 
            children: followings,
            });
        }
        if (!categoryMap.get(d.category)) {
          const group = new Set();
          group.add(d.cluster_group)
          categoryMap.set(d.category, group)
        } else {
          categoryMap.get(d.category).add(d.cluster_group);
        }
        this.parents.set(d.cluster_name, d.cluster_group);
        this.parents.set(d.cluster_group, d.category);
        this.parents.set(d.category, "All");
        this.followings.set(d.cluster_name, d.top_follows.split(","));
      });

      // community_size	semantic_change	ideology_semantic_change	male_ratio	friends_count_mean	
      // friends_count_median	follower_count_mean	follower_count_median	tweet_count_mean	tweet_count_median	
      // tweet_count_rank	gender	age	is_org	betweenness	closeness	cluster_id	category	cluster_group	cluster_name	topic_words	top_follows
      this.parents.set("All", null);

      const categories = [];
      categoryMap.forEach((value, key) => {
        const groups = []
        value.forEach(group => {
          groups.push({name: group, children: groupMap.get(group)});
        });
        categories.push({name: key, children: groups,});
      });

      this.storedData = {name: "All", children: categories};
      this.root =  d3.hierarchy(this.storedData)
        .sum(d => d["community_size"])
        .sort((a, b) => b["community_size"] - a["community_size"])

      this.node = this.svg.append("g");
      this.label = this.svg.append("g");

      this.update("community_size");
    });
  },

  methods: {
    pack(selected) {
      const p = d3.pack()
              .size([Math.min(this.width, this.height), Math.min(this.width, this.height)])
              .padding(3)
      return p(this.root
                .sum(d => d[selected])
                .sort((a, b) => b["community_size"] - a["community_size"])
              )
    },

    update(selected) {
      // https://bl.ocks.org/HarryStevens/4fba7a62b0ff302ef49768198d4c54c6
      this.root = this.pack(selected);
      if (!this.focus) {
        this.focus = this.root;
      }

      const that = this;

      const nodes = this.node
        .selectAll("circle")
        .data(that.root.descendants().slice(1))

      const v = [this.focus.x, this.focus.y, this.focus.r * 2];
      const k = Math.min(this.width, this.height) / v[2];

      nodes.enter()
        .append("circle")
          .attr("fill", d => d.children ? that.color(d.depth) : "none")
          .attr("pointer-events", d => !d.children ? "none" : null)
          .on("mouseover", function() { d3.select(this).attr("stroke", "#ffffff"); })
          .on("mouseout", function() { d3.select(this).attr("stroke", null); })
          .on("click", (event, d) => {
            that.focus !== d && (that.zoom(event, d), event.stopPropagation());
          })
          .transition()
          .duration(2000)
          .attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
          .attr("r", d => d.r * k);

      nodes
        .transition()
        .duration(2000)
        .attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
        .attr("r", d => d.r * k);

      nodes
        .exit()
        .remove();
        
      const labels = this.label
        .selectAll(".circle-label")
        .data(that.root.descendants())
      
      labels.enter()
        .append("text")
          .attr("class", "circle-label")
          .attr('text-anchor', 'middle')
          .style("fill", d => !d.children ? "white" : "black")
          .style("font", d => d.children ? "15px" : "12px")
          .attr("font-weight",d => d.children ? "800" : "600")
          .style("fill-opacity", d => d.parent === that.root ? 1 : 0)
          .style("display", d => d.parent === that.root ? "inline" : "none")
          .text(d => {
            if (!d.children) {
              return '@' + d.data.name;
            }
            return d.data.name;
          })
          .attr("pointer-events", d => d.children ? "none" : null)
          .on("click", (event, d)  => {
            window.open('https://twitter.com/'+ d.data.name);
          })
          .transition()
          .duration(2000)
          .attr("transform", d => {
            if (d.children && d.children[0].children) {
              return `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`;
            }
            return `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k}) rotate(-45)`;
          })

      labels
        .transition()
        .duration(500)
        // .style("fill-opacity", d => d.parent === that.root ? 1 : 0)
        // .style("display", d => d.parent === that.root ? "inline" : "none")
        .text(d => {
          if (!d.children) {
            return '@' + d.data.name;
          }
          return d.data.name;
        })

      labels
        .exit()
        .remove();
            
      setTimeout(() => {
        this.zoomTo([that.focus.x, that.focus.y, that.focus.r * 2]);  
      }, 2000);
      // this.zoomTo([that.root.x, that.root.y, that.root.r * 2]);
    },

    zoomTo(v) {
      const k = Math.min(this.width, this.height) / v[2];

      this.view = v;

      this.label
        .selectAll(".circle-label")
        .attr("transform", d => {
          if (d.children && d.children[0].children) {
            return `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`;
          }
          return `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k}) rotate(-45)`;
        })

      this.node.selectAll("circle").attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      this.node.selectAll("circle").attr("r", d => d.r * k);
    },

    zoom(event, d) {
      this.focus = d;

      const that = this;

      const transition = this.svg.transition()
          .duration(event.altKey ? 7500 : 750)
          .tween("zoom", () => {
            const i = d3.interpolateZoom(that.view, [that.focus.x, that.focus.y, that.focus.r * 2]);
            return t => that.zoomTo(i(t));
          });

      this.label
        .selectAll(".circle-label")
        .filter(function(d) { return d.parent === that.focus || this.style.display === "inline"; })
        .transition(transition)
          .style("fill-opacity", d => d.parent === that.focus ? 1 : 0)
          .on("start", function(d) { if (d.parent === that.focus) this.style.display = "inline"; })
          .on("end", function(d) { if (d.parent !== that.focus) this.style.display = "none"; });

      this.findAncestors(d.data.name);
    },

    findAncestors(e) {
      const ancestors = [];
      while (e) {
        ancestors.unshift({text : e});
        e = this.parents.get(e);
      }
      this.items = ancestors;
    },
  }
}
</script>

<style scoped>
#chart-2 {
  height: 100%;
  width: 100%;
}

ul.breadcrumb-custom {
  padding: 10px 16px;
  list-style: none;
}
ul.breadcrumb-custom li {
  display: inline;
  font-size: 18px;
}
ul.breadcrumb-custom li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

.breadcrumb {
 background: None;
}

a {
  color: #007bff;
  text-decoration: none;
  cursor: default;
}
</style>