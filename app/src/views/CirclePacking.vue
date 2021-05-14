<template>
  <div class="page">
    <div id="left">
        <Ranking/>
    </div>

    <div id="right" ref="right">
      <CircleGraph/>
    </div>
  </div>
</template>

<script>
import CircleGraph from "../components/CircleGraph.vue";
import Ranking from "../components/Ranking.vue";

export default {
  name: "CirclePacking",

  components: {
    CircleGraph,
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
}

#right {
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>