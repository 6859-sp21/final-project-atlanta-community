<template>
  <div>
    <h3>
      Ranking Communities
    </h3>
   <b-form-group>
      <b-form-radio-group
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        name="radio-btn-stacked"
        buttons
        stacked
        @change="selectRanking(selected)"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Ranking",
  data() {
    return {
      selected: 'community_size',
      options: [
        { text: 'community size', value: 'community_size' },
        { text: 'average friends count', value: 'friends_count_mean' },
        { text: 'average follower count', value: 'follower_count_mean' },
        { text: 'average tweet count', value: 'tweet_count_mean' }
      ]
    }
  },
  methods: {
    selectRanking: function() {
      eventBus.$emit('select-ranking', this.selected);
    },
  }
}
</script>
<style scoped>
#btn {
  width: 100%;
}
</style>