<template>
  <div class="page">
    <div id="left">
        <Ranking/>
    </div>

    <div id="right" ref="right">
      <SizeGraph/>
    </div>
  </div>
</template>

<script>
import SizeGraph from "../components/SizeGraph.vue";
import Ranking from "../components/Ranking.vue";

export default {
  name: "BarChart",

  components: {
    SizeGraph,
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