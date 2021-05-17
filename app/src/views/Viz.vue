<template>
  <div class="viz-page">
    <Cover/>
    <Intro/>
    <Tutorial/>

    <CirclePacking v-scrollanimation/>

    <BarChart v-scrollanimation/>

    <ScatterChart v-scrollanimation/>
    <Thanks/>
  </div>
</template>

<script>
import Cover from './Cover.vue';
import Intro from './Intro.vue';
import Tutorial from './Tutorial.vue';
import BarChart from './BarChart.vue';
import ScatterChart from './ScatterChart';
import Thanks from './Thanks';
import CirclePacking from './CirclePacking';

export default {
  components: { 
    Cover,
    Intro,
    Tutorial,
    BarChart,
    ScatterChart,
    Thanks,
    CirclePacking
  },

  name: "Viz",

  data() {
    return {
      text: 'Welcome to Novid'
    }
  }
}
</script>
<style scoped>

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

.viz-page {
  background: #171717;
  color: #FFFFFF;
}
</style>
