<template>
  <div>
    <Intro v-scrollanimation/>

    <BarChart v-scrollanimation/>

    <SizeChart v-scrollanimation/>
  </div>
</template>

<script>
import Intro from './Intro.vue';
import BarChart from './BarChart.vue';
import SizeChart from './SizeChart';

export default {
  components: { 
    Intro,
    BarChart,
    SizeChart
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
