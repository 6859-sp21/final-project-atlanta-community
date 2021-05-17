<template>
  <div id="ranking-group">
    <div id="selection-text">
    <span>Sort the communities by:</span>
    </div>
    <div id="selection">
    <b-form-select @change="selectRanking(selected)" v-model="selected" :options="options"></b-form-select>
    </div>
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
        { text: 'semantic change', value: 'semantic_change' },
        { text: 'ideology semantic change', value: 'ideology_semantic_change' },
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

#ranking-group {
  display: flex;
  flex-direction: row;
}

#selection-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 0.2em;
}

#selection {
  width: 15em;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
}
</style>
