<template>
  <div class="page">
    <div class="title">
      <h2>
        Ranking communities
      </h2>
    </div>
    <div class="content">
      <div class="left">
          <Ranking/>
      </div>

      <div class="right" ref="right">
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
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.left {
  height: 100%;
  width: 30%;
  padding: 5em;
}

.right {
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>