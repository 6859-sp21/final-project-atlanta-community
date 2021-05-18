<template>
  <div id="cover">
    <div id="title">
      <div id="title-text">
        <h1  v-scrollanimation>
          {{title1}}
        </h1>
        <h2  v-scrollanimation>
          {{title2}}
        </h2>
        <h5 v-scrollanimation>
          {{title3}}
        </h5>
      </div >
      <span @click="scroll()" id="arrow" v-scrollanimation >╲╱</span>
    </div>
    <div id="cover-image">
    </div>
  </div>
</template>

<script>
export default {
  name: "Cover",

  data() {
      return {
        title1: "Exploring patterns of language variation on social media",
        title2: "A case study in Atlanta online communities",
        title3: "Warning: there might be some explicit word usage on this website that is not appropriate for all ages"
      }
  },

  methods: {
    scroll() {  
      document.getElementById("intro").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
#cover {
  min-height: 110vh;
  display: flex;
  flex-direction: row;
  background: #171717;
}

#title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
    text-align: left;
    margin: 30px;  
    font-weight: bold;
}

h2 {
  text-align: left;
  margin: 30px;
}

h5 {
  text-align: left;
  margin: 30px;
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
