<template>
  <div id="intro-bar">
    <h2 v-scrollanimation>
      Ranking Communities
    </h2>
    <div id="text-block" v-scrollanimation>
      <hr>
      <p>
Now that you are familiar with the different communities in Atlanta’s social media environment, do you want to understand which communities lead in different ways? We’ll provide you with a visual ranking tool so you can choose the metric of your preference to rank communities. You can choose this metric of interest in the drop-down menu and since there  are too many communities, you’ll be able to scroll and zoom in or out on the barchart with the tool on the left. You just have to move or expand the rectangle and you will se how it helps you navigate the rankings. You’ll learn that while “follow”, “sex” and “Trump” are the largest communities in size, those with highest number of followers are: “Basketball”, “care” and “entrepreneur”.
      </p>
    </div> 
    <span @click="scroll()" id="arrow">╲╱</span>
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
      document.getElementById("page-barchart").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
#intro-bar {
  background: #303030;
  min-height: 100vh;
}

p {
  padding: 1em;
}

#intro-bar {
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
  justify-content: space-around;
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
  color: #1DA1F2;
}


#arrow {
    font-weight: 1000;
    opacity: 0.5;
    cursor: pointer;
}
</style>
