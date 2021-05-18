<template>
  <div id="tutorial">
    <div class="text-image">
      <b-img v-scrollanimation class="screenshot" :src="require('../assets/semantic_change.png')"></b-img>
    </div>
    <div id="text-block">
      <hr>
      <p  v-scrollanimation>
        What is Semantic Change? According to wikipedia, Semantic Change is a form of language change regarding the evolution of word usage.<br>
      </p>
      <span @click="scroll()" id="arrow">╲╱</span>
    </div> 
  </div>
</template>

<script>
export default {
  name: "Tutorial",

  data() {
      return {
      }
  },

  methods: {
    scroll() {  
      document.getElementById("definitions").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
#tutorial {
  background: #303030;
  min-height: 60vh;
}

p {
  padding: 5em;
}

#tutorial {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.text-image {
  width: 25%;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.screenshot {
  width: 90%;
  height: auto;
}

#text-block {
  min-width: 250px;
  width: 70%;
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

#arrow {
    font-weight: 1000;
    opacity: 0.5;
    cursor: pointer;
}
</style>
