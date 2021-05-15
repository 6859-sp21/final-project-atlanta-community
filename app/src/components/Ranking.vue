<template>
  <div>
    <h2>
      Ranking Communities
    </h2>
   <b-form-group  label="Sort the communities by:">
      <b-form-radio-group
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        name="radio-btn-stacked"
        buttons
        stacked
        class="button-radio"
        button-variant="outline-secondary"
        @change="selectRanking(selected)"
      ></b-form-radio-group>
    </b-form-group>
    <h4>
      Zoom in/out and move
      👉
    </h4>
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
        { text: 'average tweet count', value: 'tweet_count_mean' },
        { text: 'lexical change', value: 'lexical_change' },
        { text: 'ideology lexical change', value: 'ideology_lexical_change' },
        { text: 'male ratio', value: 'male_ratio' },
      ]
    }
  },

  created: function() {
    eventBus.$on("select-ranking", this.changeButton);
  },

  
  beforeDestroy: function() {
    eventBus.$off("select-ranking", this.changeButton);
  },

  methods: {
    selectRanking: function() {
      eventBus.$emit('select-ranking', this.selected);
    },

    changeButton: function(newSelected) {
      this.selected = newSelected;
    }
  }
}
</script>
<style scoped>
.button-radio {
  width: 100%;
}

h2 {
  font-weight: bold;
  padding-bottom: 1em;
}
</style>