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
      factor2: "lexical_change",
      category: "all",
      categories: [
        "all",
        "atlanta",
        "beauty",
        "education",
        "entertainment",
        "health",
        "other",
        "politics",
        "religion",
        "social_justice",
        "sports"
      ],
      factors: [
        'community_size', 
        'lexical_change', 
        'ideology_lexical_change', 
        'male_ratio',
        'friends_count_mean', 
        'friends_count_median',
        'follower_count_mean', 
        'follower_count_median',
        'tweet_count_mean', 
        'tweet_count_median', 
        'tweet_count_rank']
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
</style>