<template>
  <div class="page">
    <div class="content">
      <div class="title" v-scrollanimation>
        <h2>
          Community Grouping
        </h2>
      </div>
      <div class="top" v-scrollanimation>
        <Ranking/>
      </div>
      <div class="bottom" ref="bottom" v-scrollanimation>
        <CircleGraph/>
      </div>
    </div>
    <span v-scrollanimation>╲╱</span>
  </div>
</template>

<script>
import CircleGraph from "../components/CircleGraph.vue";
import Ranking from "../components/Ranking.vue";
import * as d3 from "d3";
import { eventBus } from "../main";

export default {
  name: "CirclePacking",

  components: {
    CircleGraph,
    Ranking,
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
  background: #212121;
  height: 110vh;
  padding-top: 4em;
  padding-bottom: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.title {
  width: 80%;
  padding-bottom: 1em;
}

.content {
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.top {
  width: 100%;
  padding-right: 1em;
}

.bottom {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


#hint-1 {
  display: flex;
  align-items: flex-start;
}

#hint-2 {
  position: relative;
  top: 66%;
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
</style>