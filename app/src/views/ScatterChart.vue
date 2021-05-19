<template>
  <div class="page" id="page-scatter">
    <div class="title" v-scrollanimation>
      <h2>
        Language Variation & Social Factors
      </h2>
    </div>
    <div class="content" v-scrollanimation>
      <div class="left">
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

      <div class="right" ref="right">
        <ScatterGraph/>
      </div>
    </div>
    <span id="arrow" @click="scroll()">╲╱</span>
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
      this.topicWords = newTopicWords.split(",").map(x => {return {text: x, value: 1}});
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
    },

    scroll() {  
      document.getElementById("thanks").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
.page {
  background: #212121;
  height: 100vh;
  margin-top: 4em;
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  width: 80%;
  padding-bottom: 1em;
}

.content {
  height: 85%;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.left {
  height: 100%;
  width: 30%;
  padding-right: 1em;
}

.right {
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

h2 {
  font-weight: bold;
}

.fade-enter-active {
  opacity: 1;
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

#arrow {
    font-weight: 1000;
    opacity: 0.5;
    cursor: pointer;
}
</style>