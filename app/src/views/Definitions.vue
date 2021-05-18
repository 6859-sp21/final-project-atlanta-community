<template>
  <div id="definitions">
    <div id="text-block">
      <h5 v-scrollanimation>Here are some key definitions of variable in this visualization</h5>
      <hr>
      <ul v-scrollanimation>
        <li v-for="item in items" :key="item.name">
          <b>{{ item.name }}</b> {{ item.text }}
        </li>
      </ul>
      <span @click="scroll()" id="arrow">╲╱</span>
    </div>
    <div class="text-image">
    </div>
  </div>
</template>

<script>
export default {
  name: "Definitions",

  data() {
      return {
        items: [
          { name: "Age", text: "we encode four age groups <=18, 19-29, 30-39, >=40 into 0-3 and use the average age of community members to represent the community-level age" },
          { name: "Gender Diversity", text: "we measure the gender diversity with the female ratio in each community" },
          { name: "Organization Status", text: "we represent organization status with the proportion of organizational accounts in each community" },
          { name: "Community Size", text: "community size is the number of unique users in a Twitter community" },
          { name: "Social Status", text: "we measure social status by the median number of friends per user in a Twitter community" },
          { name: "User Tweet/Favorite Activity", text: "user tweet activity is the average number of tweets per user in the community, whereas user favorite activity is measured by the average number of favorites given out per user in a community" },
          { name: "Closeness", text: "we represent closeness of a community with the average closeness score per user. This closeness score of a user measures its average inverse distance to all other users" },
          { name: "Betweenness", text: "we represent betweenness of a community with the average betweenness score per user. It represents the degree to which nodes stand between each other" },
        ]
      }
  },

  methods: {
    scroll() {  
      document.getElementById("intro-circle").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
#definitions {
  background: #303030;
  min-height: 60vh;
}

h5 {
  padding: 5em;
  padding-bottom: 0;
  text-align: left;
}

ul {
  padding: 5em;
  padding-top: 0;
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
