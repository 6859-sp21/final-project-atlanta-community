<template>
  <div id="tooltip-3">
    <b-card>
      <b-card-text>
        The <b>{{ clusterName }}</b> community described with the following topic words: {{ topicWords }}
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
    name: "TooltipThree",
    props: ['clusterName', 'topicWords'],
}
</script>
<style scoped>
#tooltip-3 {

  opacity: 0;
}
</style>