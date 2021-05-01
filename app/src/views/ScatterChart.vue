<template>
  <div class="page">
    <div id="left">
        <Factors/>
        <transition name="fade">
        <div v-if="showingHint">
          <h4>
            Hover on a dot to see the topic words of the community
            👉
          </h4>
        </div>
        <TooltipThree v-else :clusterName="clusterName" :topicWords="topicWords"/>
        </transition>
    </div>

    <div id="right" ref="right">
        <h2>
          Investigate how language variation relates to social factors
        </h2>
      <ScatterGraph/>
    </div>
  </div>
</template>

<script>
import ScatterGraph from "../components/ScatterGraph.vue";
import Factors from '../components/Factors.vue';
import TooltipThree from '../components/TooltipThree.vue';
import { eventBus } from "../main";
// import * as d3 from "d3";

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
      topicWords: [],
      showingHint: true,
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
      this.showingHint = false;
      // d3.selectAll("#tooltip-3")
      //   .transition()
      //   .duration(500)
      //   .style("opacity", "1");
    },

    hideTooltip() {
      this.showingHint = true;
      console.log("hide");
      // d3.selectAll("#tooltip-3")
      //   .transition()
      //   .duration(500)
      //   .style("opacity", "0");
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
  width: 30%;
  padding: 5em;
  padding-top: 15em;
}

#right {
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
}

h2 {
  font-weight: bold;
}

.fade-enter-active {
  opacity: 1;
  transition: all 1s ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>