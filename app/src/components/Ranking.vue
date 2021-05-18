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
        { text: 'number of friends', value: 'friends_count_median' },
        { text: 'number of followers', value: 'follower_count_mean' },
        { text: 'user activity in tweeting', value: 'tweet_count_mean' },
        { text: 'user activity in favoriting', value: 'favorite_count_mean' },
        { text: 'semantic change', value: 'semantic_change' },
        { text: 'ideological semantic change', value: 'ideology_semantic_change' },
        {text: 'organization status', value: 'is_org'},
        {text: 'age', value: 'age'},
        {text: 'gender (female ratio)', value: 'gender'},
        {text: 'betweenness', value: 'betweenness'},
        {text: 'closeness', value: 'closeness'},
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
