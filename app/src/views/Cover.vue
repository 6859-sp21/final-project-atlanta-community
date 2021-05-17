<template>
  <div id="intro">
    <div id="title">
      <div id="title-text">
        <h1  v-scrollanimation>
          {{title1}}
        </h1>
        <h2  v-scrollanimation>
          {{title2}}
        </h2>
      </div >
      <span v-scrollanimation>╲╱</span>
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
        title2: "A case study in Atlanta online communities"
      }
  }
}
</script>

<style scoped>
#intro {
  min-height: 100vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: row;
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
}

h2 {
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
</style>
