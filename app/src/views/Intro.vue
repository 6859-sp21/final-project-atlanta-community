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
        Our team will explore how different communities in Atlanta perceive language in different ways. To do this, we’ll be using a dataset of 149 local communities with information about their online behavior on Twitter.  Information at the twitter account level allowed us to create summary statistics at the community level such as  community size,  average number of followers, friends and tweets and understand what are the top follows and topic words in each community. Following a specific methodology, deviations from the normal language can be measured and these deviations are called lexical variation. 
        Our main goal is that the user can understand lexical variation in social media across Atlanta’s communities and have a guide for current local trends online. Examples of potential users  are journalists, politicians and society as a whole.
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