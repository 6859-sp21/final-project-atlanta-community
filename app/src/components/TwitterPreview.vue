<template>
  <div>
    <b-link v-bind:href="'https://twitter.com/'+ following">
      @{{ following }}
    </b-link>
  </div>
</template>
<script>
export default {
    name: "TwitterPreview",
    props: ['following'],
}
</script>