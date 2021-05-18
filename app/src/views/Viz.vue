<template>
  <div class="viz-page">
    <Cover/>
    <Intro/>
    <Tutorial/>
    <Definitions/>
    <CircleIntro/>
    <CirclePacking/>
    <BarIntro/>
    <BarChart/>
    <ScatterIntro/>
    <ScatterChart/>
    <Thanks/>
  </div>
</template>

<script>
import Cover from './Cover.vue';
import Intro from './Intro.vue';
import Tutorial from './Tutorial.vue';
import Definitions from './Definitions.vue';
import CircleIntro from './CircleIntro.vue';
import BarChart from './BarChart.vue';
import ScatterChart from './ScatterChart';
import Thanks from './Thanks';
import CirclePacking from './CirclePacking';
import BarIntro from './BarIntro.vue';
import ScatterIntro from './ScatterIntro.vue';

export default {
  components: { 
    Cover,
    Intro,
    Tutorial,
    Definitions,
    CircleIntro,
    BarChart,
    ScatterChart,
    Thanks,
    CirclePacking,
    BarIntro,
    ScatterIntro
  },

  name: "Viz",

  data() {
    return {
      text: 'Welcome to Novid',
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
  background: #212121;
  color: #FFFFFF;
  /* background: white; */
}

</style>
