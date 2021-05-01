<template>
  <div class="page">
    <div id="left">
        <Factors/>
        <TooltipThree :clusterName="clusterName" :topicWords="topicWords"/>
    </div>

    <div id="right" ref="right">
      <ScatterGraph/>
    </div>
  </div>
</template>

<script>
import ScatterGraph from "../components/ScatterGraph.vue";
import Factors from '../components/Factors.vue';
import TooltipThree from '../components/TooltipThree.vue';
import { eventBus } from "../main";
import * as d3 from "d3";

export default {
  name: "BarChart",

  components: {
    ScatterGraph,
    Factors,
    TooltipThree
  },

  data() {
    return {
      clusterName: "",
      topicWords: []
    }
  },

  created: function() {
    eventBus.$on("show-tooltip-3", this.showTooltip);
    eventBus.$on("hide-tooltip-3", this.hideTooltip);
  },

  
  beforeDestroy: function() {
    eventBus.$off("show-tooltip-3", this.showTooltip);
    eventBus.$off("hide-tooltip-3", this.hideTooltip);
  },

  methods: {
    showTooltip(newClusterName, newTopicWords) {
      console.log("show");
      this.clusterName = newClusterName;
      this.topicWords = newTopicWords;
      d3.selectAll("#tooltip-3")
        .transition()
        .duration(500)
        .style("opacity", "1");
    },

    hideTooltip() {
      console.log("hide");
      d3.selectAll("#tooltip-3")
        .transition()
        .duration(500)
        .style("opacity", "0");
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