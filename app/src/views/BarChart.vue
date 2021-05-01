<template>
  <div class="page">
    <div id="left">
      <transition name="move">
      <Twitters v-if="showingTwitters" :followingList="followingList"/>
      </transition>
      <transition name="move">
      <div v-if="showingHint2" id="hint-2">
        <h4>
          Check a community to see the top follows 👉
        </h4>
      </div>
      </transition>
    </div>

    <div id="right" ref="right">
      <BarGraph :clusters="clusters"/>
      <div id="right-bottom">
      <transition name="fade">
        <Checkbox v-if="showingCheckbox" :options="options" :category="category"/>
        <div v-else id="hint-1">
          <h4>
            Click the bar to show communities under the category ☝️
          </h4>
        </div>
      </transition>
      </div>
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
      category: "",
      showingCheckbox: false,
      showingTwitters: false,
      showingHint2: false,
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
      this.options = data.options;
      this.category = data.category;
      this.showingCheckbox = true;
      this.showingHint2 = true;
      this.followingList = [];
    },

    showTwitters(community) {
      console.log(community);
      d3.csv("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then((data) => {
         const selectedData = data.find(d => d.cluster_name == community);
         this.followingList = selectedData.top_follows.split(",");
      })
      console.log(this.followingList);
      this.showingTwitters = true;
      this.showingHint2 = false;
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

#right-bottom {
  height: 30%;
  width: 90%;
  padding-top: 2em;
}

#hint-1 {
  display: flex;
  align-items: flex-start;
}

#hint-2 {
  position: relative;
  top: 72%;
}

.fade-enter-active {
  opacity: 1;
  transition: all 1s ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.move-enter-active {
  opacity: 1;
  transform: translateX(0px);
  transition: all 1s ease-out;
}

.move-enter,
.move-leave-active {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s ease-out;
}
</style>