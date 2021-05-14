<template>
  <div id="following-list" v-if="followingList.length > 0">
    <h5>
      Top Follows of Selected Community
    </h5>
    <div  id="follows">
      <TwitterPreview
        v-for="following in followingList"
        :key="following"
        :following="following"
      />
    </div>
  </div>
</template>
<script>
import TwitterPreview from "../components/TwitterPreview.vue";

export default {
  name: "Twitters",
  components: {
      TwitterPreview
  },
  props: ['followingList'],
}
</script>
<style scoped>
#following-list {
  height: 100%;
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
}

#follows {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>