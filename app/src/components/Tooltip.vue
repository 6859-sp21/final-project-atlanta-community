<template>
  <div class="tooltip">
    <b-card v-bind:title="data.category">
      <b-card-text>
        {{ data.alc }}
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
    name: "Tooltip",
    props: ['data', 'visible'],
}
</script>
<style scoped>
.tooltip {
  opacity: 0;
}
</style>