<template>
  <div class="page">
    <div class="content">
      <div class="title">
        <h2>
          Community Grouping
        </h2>
      </div>
      <div class="top">
        <Ranking/>
      </div>
      <div class="bottom" ref="bottom">
        <BarGraph/>
      </div>
    </div>
    <span v-scrollanimation>╲╱</span>
  </div>
</template>

<script>
import BarGraph from "../components/BarGraph.vue";
import Ranking from "../components/Ranking.vue";

export default {
  name: "BarChart",

  components: {
    BarGraph,
    Ranking
  },

  data() {
    return {
    }
  },

  created: function() {
  },

  
  beforeDestroy: function() {
  },

  mounted() {
  },

  methods: {
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
  justify-content: space-around
}

.title {
  width: 80%;
  padding-bottom: 1em;
}

.content {
  height: 80%;
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>