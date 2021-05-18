<template>
  <div id="intro-scatter">
    <h2 v-scrollanimation>
        Language Variation & Social Factors
    </h2>
    <div id="text-block" v-scrollanimation>
      <hr>
      <p>
        Now you might be wondering how different characteristics of communities influence semantic change. The graph below will allow you two compare the relationship between two factors in a scatterplot. You’ll be able to choose the factors and also to filter by categories from the drop-down menus on the left. Communities are represented by bubbles in the graph, their color represents the category to which they belong and the size represents the community size. For example, you will notice that the larger the community size, the lower the lexical change, not only for all the categories but generally by each individual category.
The best part is that you’ll be able to discover more about each individual community when you hover your mouse over each dot in the graph. Not only will you see the name of the community, but a word cloud will show up on the left displaying the main topic words used in that community. 
      </p>
    </div> 
    <span id="arrow" @click="scroll()">╲╱</span>
  </div>
</template>

<script>
export default {
  name: "CircleIntro",

  data() {
      return {
      }
  },

  methods: {
    scroll() {  
      document.getElementById("page-scatter").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
#intro-scatter {
  background: #303030;
  min-height: 100vh;
}

p {
  padding: 1em;
}

#intro-scatter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#text-block {
  min-width: 250px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

h2 {
  font-weight: bold;
}

#arrow {
    font-weight: 1000;
    opacity: 0.5;
    cursor: pointer;
}
</style>
