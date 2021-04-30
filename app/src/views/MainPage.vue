<template>
  <div>
    <Intro/>
    <BarChart/>
    <SizeChart/>
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
</style>
