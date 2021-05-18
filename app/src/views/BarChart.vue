<template>
  <div class="page" id="page-barchart">
    <div class="content" id="content-barchart">
      <div class="title" v-scrollanimation>
        <h2>
          Ranking Communities
        </h2>
      </div>
      <div class="top" v-scrollanimation>
        <Ranking :dropdownTitile="dropdownTitile"/>
      </div>
      <div class="bottom" ref="bottom" v-scrollanimation>
        <BarGraph/>
      </div>
    </div>
    <span id="arrow" @click="scroll()">╲╱</span>
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
      dropdownTitile: "Sort the communities by:"
    }
  },

  created: function() {
  },

  
  beforeDestroy: function() {
  },

  mounted() {
  },

  methods: {
    scroll() {  
      document.getElementById("intro-scatter").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
.page {
  /* background: #212121; */
  background: white;
  height: 100vh;
  margin-top: 4em;
  margin-bottom: 4em;
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

h2 {
  font-weight: bold;
}

#arrow {
  font-weight: 1000;
  opacity: 0.5;
  cursor: pointer;
}
</style>