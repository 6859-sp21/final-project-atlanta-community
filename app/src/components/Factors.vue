<template>
  <div>
    <b-form-group id="input-group-1" label="Choose two factors:" label-for="m-2">
      <b-form-select @change="selectFactors" v-model="factor1" :options="factors"></b-form-select>
      <b-form-select @change="selectFactors" v-model="factor2" :options="factors"></b-form-select>
    </b-form-group>
    <b-form-group id="input-group-3" label="Choose a category:" label-for="m-2">
      <b-form-select @change="selectFactors" v-model="category" :options="categories"></b-form-select>
    </b-form-group>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Ranking",

  data() {
    return {
      factor1: "community_size",
      factor2: "semantic_change",
      category: "all",
      categories: [
        "all",
        "atlanta",
        "society",
        "entertainment",
        "sports"
      ],
      factors: [
        { text: 'community size', value: 'community_size' },
        { text: 'median friends count', value: 'friends_count_median' },
        { text: 'mean friends count', value: 'friends_count_mean' },
        { text: 'median follower count', value: 'follower_count_median' },
        { text: 'mean follower count', value: 'follower_count_mean' },
        { text: 'mean tweet count', value: 'tweet_count_mean' },
        { text: 'median tweet count', value: 'tweet_count_median' },
        { text: 'tweet count rank', value: 'tweet_count_rank' },
        { text: 'median favoriting count', value: 'favorite_count_median' },
        { text: 'mean favoriting count', value: 'favorite_count_mean' },
        { text: 'semantic change', value: 'semantic_change' },
        { text: 'ideological semantic change', value: 'ideology_semantic_change' },
        { text: 'organization status', value: 'is_org'},
        { text: 'age', value: 'age'},
        { text: 'gender (female ratio)', value: 'gender'},
        { text: 'betweenness', value: 'betweenness'},
        { text: 'closeness', value: 'closeness'},
      ]
    }
  },

  methods: {
    selectFactors: function() {
      eventBus.$emit('select-factors', this.factor1, this.factor2, this.category);
    },
  }
}
</script>
<style scoped>
div {
  max-height: 40%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>