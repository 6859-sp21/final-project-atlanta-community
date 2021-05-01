<template>
  <div>
    <Intro/>

    <BarChart v-scrollanimation/>
    <Spacing/>

    <SizeChart v-scrollanimation/>
    <Spacing/>

    <ScatterChart v-scrollanimation/>
    <Thanks/>
  </div>
</template>

<script>
import Intro from './Intro.vue';
import BarChart from './BarChart.vue';
import SizeChart from './SizeChart';
import ScatterChart from './ScatterChart';
import Spacing from '../components/Spacing';
import Thanks from './Thanks';

export default {
  components: { 
    Intro,
    BarChart,
    SizeChart,
    ScatterChart,
    Spacing,
    Thanks
  },

  name: "MainPage",

  data() {
    return {
      text: 'Welcome to Novid'
    }
  }
}
</script>
<style scoped>
#chart-1 {
  height: 100vh;
  background: none;
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
