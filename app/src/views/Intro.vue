<template>
  <div id="intro">
    <div id="text-block">
      <hr>
      <p  v-scrollanimation>
      Our team will explore how different communities in Atlanta perceive language in different ways. To do this, we’ll be using a dataset of 149 local communities with information about their online behavior on Twitter.  Information at the twitter account level allowed us to create summary statistics at the community level such as  community size,  average number of followers, friends and tweets and understand what are the top follows and topic words in each community. Following a specific methodology, deviations from the normal language can be measured and these deviations are called semantic change. 
      Our main goal is that the user can understand the semantic change in social media across Atlanta’s communities and have a guide for current local trends online. Examples of potential users  are journalists, politicians and society as a whole.
      </p>
      <span @click="scroll()" id="arrow">╲╱</span>
    </div>
    <div class="text-image">
      <b-img v-scrollanimation class="screenshot" :src="require('../assets/atlanta.png')"></b-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",

  data() {
      return {
      }
  },

  methods: {
    scroll() {  
      console.log(document.getElementById("intro"));
      document.getElementById("tutorial").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
#intro {
  background: #303030;
  min-height: 60vh;
}

p {
  padding: 5em;
}

#intro {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
