<template>
  <div class="spacing">
    <h5>⬇️ cotinue...</h5>
  </div>
</template>

<script>
export default {
  name: "Spacing",

  data() {
      return {
      }
  }
}
</script>

<style scoped>
.spacing {
  background-image: url('../assets/map.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 10vh;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>