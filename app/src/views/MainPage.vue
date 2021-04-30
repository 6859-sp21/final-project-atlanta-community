<template>
  <div>
    <Intro/>
    <BarChart/>
  </div>
</template>

<script>
import Intro from './Intro.vue';
import BarChart from './BarChart.vue';

export default {
  components: { 
    Intro,
    BarChart,
  },

  name: "MainPage",

  data() {
    return {
      text: 'Welcome to Novid'
    }
  }
}
</script>

