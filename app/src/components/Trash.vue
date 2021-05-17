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
  name: "Trash",

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
    this.height = this.$refs.chart2.clientHeight;

    this.width = Math.min(this.width, this.height);
    this.height = this.width;

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
      .style("font", "10px sans-serif")
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
                          lexical_change: parseFloat(d.lexical_change) / 25,
                          ideology_lexical_change: parseFloat(d.ideology_lexical_change)  / 25,
                          male_ratio: parseFloat(d.male_ratio)  / 25,
                          friends_count_mean: parseFloat(d.friends_count_mean)  / 25,
                          follower_count_mean: parseFloat(d.follower_count_mean)  / 25,
                          tweet_count_mean: parseFloat(d.tweet_count_mean)  / 25,
          });
        });
        if (!groupMap.get(d.cluster_group)) {
          groupMap.set(d.cluster_group, 
          [{name: d.cluster_name, 
            children: followings,
            // community_size: parseFloat(d.community_size),
            // lexical_change: parseFloat(d.lexical_change),
            // ideology_lexical_change: parseFloat(d.ideology_lexical_change),
            // male_ratio: parseFloat(d.male_ratio),
            // friends_count_mean: parseFloat(d.friends_count_mean),
            // follower_count_mean: parseFloat(d.follower_count_mean),
            // tweet_count_mean: parseFloat(d.tweet_count_mean),
            }])
        } else {
          groupMap.get(d.cluster_group).push({name: d.cluster_name, 
            children: followings,
            // community_size: parseFloat(d.community_size),
            // lexical_change: parseFloat(d.lexical_change),
            // ideology_lexical_change: parseFloat(d.ideology_lexical_change),
            // male_ratio: parseFloat(d.male_ratio),
            // friends_count_mean: parseFloat(d.friends_count_mean),
            // follower_count_mean: parseFloat(d.follower_count_mean),
            // tweet_count_mean: parseFloat(d.tweet_count_mean),
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

      // community_size	lexical_change	ideology_lexical_change	male_ratio	friends_count_mean	
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
        .sort((a, b) => b.value - a.value)

      this.update("community_size");
    });
  },

  methods: {
    pack(selected) {
      const p = d3.pack()
              .size([this.width, this.height])
              .padding(3)
      return p(this.root
                .sum(d => d[selected])
                .sort((a, b) => b.value - a.value))
    },

    update(selected) {
      // https://bl.ocks.org/HarryStevens/4fba7a62b0ff302ef49768198d4c54c6
      this.root = this.pack(selected);
      this.focus = this.root;

      const that = this;

      this.node = this.svg
        .selectAll("circle")
        .data(that.root.descendants().slice(1))

      const v = [that.root.x, that.root.y, that.root.r * 2];
      const k = this.width / v[2];

      this.node.enter()
        .append("circle")
          .attr("fill", d => d.children ? that.color(d.depth) : "none")
          .attr("pointer-events", d => !d.children ? "none" : null)
          .on("mouseover", function() { d3.select(this).attr("stroke", "#ffffff"); })
          .on("mouseout", function() { d3.select(this).attr("stroke", null); })
          .on("click", (event, d) => {
            that.focus !== d && (that.zoom(event, d), event.stopPropagation());
          })
          .transition()
          .delay(function(d,i){return(i*3)})
          .duration(2000)
          .attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
          .attr("r", d => d.r * k);

      this.node
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(2000)
        .attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
        .attr("r", d => d.r * k);

      this.node
        .exit()
        .remove();
        
      this.label = this.svg
        .selectAll(".circle-label")
        .data(that.root.descendants())
      
      this.label.enter()
        .append("text")
          .attr("class", "circle-label")
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
            console.log(d.data.name);
            window.open('https://twitter.com/'+ d.data.name);
          })
          .transition()
          .delay(function(d,i){return(i*3)})
          .duration(2000)
          .attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)

      this.label
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(500)
        .style("fill-opacity", d => d.parent === that.root ? 1 : 0)
        .style("display", d => d.parent === that.root ? "inline" : "none")
        .text(d => {
          if (!d.children) {
            return '@' + d.data.name;
          }
          return d.data.name;
        })
        .attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)

      this.label
        .exit()
        .remove();

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
      console.log("------------------");
      console.log("zooming");
      console.log(d.data.name);

      const that = this;

      const transition = this.svg.transition()
          .duration(event.altKey ? 7500 : 750)
          .tween("zoom", d => {
            console.log("zooming");
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
  height: 90%;
  width: 90%;
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