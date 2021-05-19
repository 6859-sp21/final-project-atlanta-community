<template>
  <div id="intro-circle">
    <h2 v-scrollanimation>
      Community Grouping
    </h2>
    <div id="text-block" v-scrollanimation>
      <hr>
      <p>
      In the graph below, each of the 149 identified  communities are represented as bubbles which are circled by the group to which that community belongs (e.g. social media, music, etc) and this, in turn, is circled by one of the four broad categories (entertainment, sports, society and atlanta). 
      </p>
    <p>
     You can explore these hierarchies and grouping by clicking each layer of circles. When you arrive in the community bubble on the third layer, you can click it and see the top Twitter accounts that are followed by members in that community. If you click on any of those accounts, it will open up in a separate page.
The size of the bubbles represent a feature of each community which can be selected from the drop-down menu at the left of the chart (community size, average friends count, etc). You can have a general first impression to understand which are Atlanta’s online communities and how they differ on one of these dimensions. For example, one quick takeaway of this graph is that the largest communities in terms of size are not necessarily the ones with the largest follower count. 

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
      document.getElementById("page-circle").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
#intro-circle {
  background: #303030;
  min-height: 100vh;
}

p {
  padding: 1em;
}

#intro-circle {
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
  color: #1DA1F2;
}

#arrow {
    font-weight: 1000;
    opacity: 0.5;
    cursor: pointer;
}
</style>
