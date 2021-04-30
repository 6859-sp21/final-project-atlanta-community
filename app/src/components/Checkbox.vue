<template>
    <div id="checkbox">
      <h5>
        Clusters in Category {{ category.toUpperCase() }}
      </h5>
      <b-form-group>
        <b-form-radio-group
          id="checkbox-group"
          v-model="selected"
          :options="options"
          @change="selectCommunity(selected)"
        ></b-form-radio-group>
      </b-form-group>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Checkbox",
  props: ['options', 'category'],
  data() {
    return {
      selected: null
    }
  },
  methods: {
    selectCommunity: function() {
      eventBus.$emit('select-community', this.selected);
    },
  }

}
</script>

<style scoped>
#checkbox {
  height: 20%;
  width: 80%;
  padding: 1em;
  /* visibility: hidden; */
}
</style>