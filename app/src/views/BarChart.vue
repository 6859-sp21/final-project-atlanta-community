<template>
  <div class="page">
    <div id="left">
      <Twitters :followingList="followingList"/>
    </div>

    <div id="right" ref="right">
      <BarGraph :clusters="clusters"/>
      <Checkbox :options="options"/>
    </div>
  </div>
</template>

<script>
import BarGraph from "../components/BarGraph.vue";
import Twitters from "../components/Twitters.vue";
import Checkbox from "../components/Checkbox.vue";
import * as d3 from "d3";
import { eventBus } from "../main";

export default {
  name: "BarChart",

  components: {
    BarGraph,
    Checkbox,
    Twitters
  },

  data() {
    return {
      title: "Exploring patterns of language variation on social media",
      clusters: [],
      options: [],
      followingList: [],
    }
  },

  created: function() {
    eventBus.$on("show-checkbox", this.showCheckbox);
    eventBus.$on("select-community", this.showTwitters);
  },

  
  beforeDestroy: function() {
    eventBus.$off("show-checkbox", this.showCheckbox);
    eventBus.$off("select-community", this.showTwitters);
  },

  mounted() {
    d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
      const that = this;
      data.forEach(function(d) {
        that.clusters.push({ text: d.cluster_name, value: d.cluster_name, category: d.category });
      });
      console.log(this.clusters)
    })
  },

  methods: {
    showCheckbox(data) {
      this.options = data;
    },

    showTwitters(community) {
      console.log(community);
      d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
         const selectedData = data.find(d => d.cluster_name == community);
         this.followingList = selectedData.top_follows.split(",");
      })
      console.log(this.followingList);
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

#right {
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>