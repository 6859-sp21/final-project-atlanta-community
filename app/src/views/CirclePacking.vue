<template>
  <div class="page" id="page-circle">
    <div class="content">
      <div class="title" v-scrollanimation>
        <h2>
          Community Grouping
        </h2>
      </div>
      <div class="top" v-scrollanimation>
        <Ranking :dropdownTitile="dropdownTitile"/>
      </div>
      <div class="bottom" ref="bottom" v-scrollanimation>
        <CircleGraph/>
      </div>
    </div>
    <span  @click="scroll()" id="arrow">╲╱</span>
  </div>
</template>

<script>
import CircleGraph from "../components/CircleGraph.vue";
import Ranking from "../components/Ranking.vue";

export default {
  name: "CirclePacking",

  components: {
    CircleGraph,
    Ranking,
  },

  data() {
    return {
      dropdownTitile: "The size of circles is showing:"
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
      document.getElementById("intro-bar").scrollIntoView({
        behavior: "smooth"
      });
    },
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

h2 {
  font-weight: bold;
}


#arrow {
    font-weight: 1000;
    opacity: 0.5;
    cursor: pointer;
}
</style>