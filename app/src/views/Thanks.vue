<template>
  <div id="thanks">
    <div id="thanks-title">
      <h1  v-scrollanimation>
        {{title1}}
      </h1>
    </div>
    <div id="thanks-content">
      <div id="thanks-text-block" v-scrollanimation>
        <b-link href="https://github.com/6859-sp21/final-project-atlanta-community">go to our github page</b-link>
      </div> 
      <div id="thanks-image-block" v-scrollanimation>
        <b-img id="thanks-logo" center :src="require('../assets/logo.png')" alt="Center image"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thanks",

  data() {
      return {
        title1: "Thanks for exploring",
      }
  }
}
</script>

<style scoped>
#thanks {
  background-image: url('../assets/map.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}


#thanks-content {
  display: flex;
  flex-direction: column;
  padding: 3em;
}

#thanks-text-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3em;
}

#thanks-image-block {
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;
}

#thanks-logo {
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
  transition: all 4s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>