<template>
  <div class="tooltip" id="tooltip-1">
    <b-card v-bind:title="data.category">
      <b-card-text>
        {{ data.alc }}
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
    name: "TooltipOne",
    props: ['data', 'visible'],
}
</script>
<style scoped>
#tooltip-1 {
  opacity: 0;
  pointer-events: none; 
  /* height: 0px;
  width: 0px; */
}
</style>