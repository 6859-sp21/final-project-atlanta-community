<template>
  <div>
    <b-card>
      <b-link v-bind:href="'https://twitter.com/'+ following">
        @{{ following }}
      </b-link>
    </b-card>
  </div>
</template>
<script>
export default {
    name: "TwitterPreview",
    props: ['following'],
}
</script>