<template>
  <div id="tooltip-3">
    <h5>Top words of <b>{{ clusterName }}</b> community</h5>
    <vue-word-cloud
      id="wordcloud"
      :rotation="rotate"
      :spacing="spacing"
      :words="topicWords"
      color="black"
      font-family="Roboto"
    />
  </div>
</template>
<script>
import VueWordCloud from 'vuewordcloud';

export default {
    name: "TooltipThree",
    props: ['clusterName', 'topicWords'],
    components: {
      [VueWordCloud.name]: VueWordCloud,
    },

    data() {
      return {
      words: [
        { text: 'Vue', value: 1000 },
        { text: 'js', value: 200 },
        { text: 'is', value: 800 },
        { text: 'very cool', value: 1000000 },
        { text: 'lunch', value: 100 },
      ],
        margin: {top: 0, right: 0, bottom: 0, left: 0 },
        rotate: null,
        spacing: 1/4,
      }
    },

    mounted() {
      this.rotate = function() {
        const options = [0, 1/8, 3/4, 7/8];
        const random = Math.floor(Math.random() * options.length);
				return options[random];
			};
    }
}
</script>
<style scoped>
#tooltip-3 {
  width: 100%;
  height: 50%;
}

h5 {
  color: #1DA1F2;
}
</style>