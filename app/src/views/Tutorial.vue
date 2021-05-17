<template>
  <div id="tutorial">
    <div id="text-block" v-scrollanimation>
      <hr>
      <p>
        What is Semantic Change? According to wikipedia, Semantic Change is a form of language change regarding the evolution of word usage.<br><br>
        
        <b-img class="screenshot" :src="require('../assets/Image5.png')"></b-img>
      </p>
      <span v-scrollanimation>╲╱</span>
    </div> 
  </div>
</template>

<script>
export default {
  name: "Tutorial",

  data() {
      return {
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

.screenshot {
   padding: 5em;
   max-width: 75%;
   height: auto;
}
</style>
