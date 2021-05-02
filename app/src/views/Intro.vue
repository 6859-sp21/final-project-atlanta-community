<template>
  <div id="intro">
    <div id="title">
      <h1  v-scrollanimation>
        {{title1}}
      </h1>
      <h2  v-scrollanimation>
        {{title2}}
      </h2>
    </div>
    <div id="content">
      <div id="text-block" v-scrollanimation>
        <p>
        Atlanta is a city characterized by a diverse population. Surprisingly, The Black Lives Matter movement revealed the fact that people from different communities interpret language differently (any fact to claim this? Some evidence on this difference in perception?). 

        The popularity of Black Lives Matter has rapidly shifted over time. Whereas public opinion on Black Lives Matter was net negative in 2018, it grew increasingly popular through 2019 and 2020.[16] A June 2020 Pew Research Center poll found that 67% of adult Americans expressed some support for the Black Lives Matter movement.[17] A later poll conducted in September 2020 showed that support among American adults had dropped to 55%, with notable declines among whites and Hispanics, while support remained widespread among black adults.[18] 
        (https://en.wikipedia.org/wiki/Black_Lives_Matter)
        </p>
      </div> 
      <div id="image-block" v-scrollanimation>
        <b-img id="logo" center :src="require('../assets/logo.png')" alt="Center image"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",

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
  background-image: url('../assets/map.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  margin-bottom: 10vh;
}

p {
  padding: 5em;
}

#content {
  display: flex;
  flex-direction: column;
}

#text-block {
  display: flex;
  flex-direction: row;
}

#image-block {
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;
}

#logo {
  max-height: 50px;
  width: auto; 
}

h1 {
    text-align: center;
    padding-top: 4em;
}

h2 {
    text-align: center;
    margin: 1em;
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