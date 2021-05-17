<template>
  <div id="thanks">
    <div id="thanks-title">
      <h1  v-scrollanimation>
        {{title1}}
      </h1>
    </div>
    <div id="thanks-content">
      <div class="thanks-text-block" v-scrollanimation>
        <p>This visualization is based on a research project in <a href="https://www.ccc.mit.edu/">MIT Center for Constructive Communication</a>, <a href="https://www.media.mit.edu/">MIT Media Lab</a></p>
        <p>Developed by Yuebin Dong, Diego Lestani, Amanda Horne, Hang Jiang (Equal Contributions)</p>
        <b-link href="/final-project-atlanta-community/#/">Project Page</b-link>
        <b-link href="https://github.com/6859-sp21/final-project-atlanta-community">Github</b-link>
      </div> 
      <div id="thanks-image-block" v-scrollanimation>
        <b-button 
          label-for="input-1" 
          class="button-share"
          variant="link"
        >        
          <ShareNetwork
            network="twitter"
            url="https://6859-sp21.github.io/final-project-atlanta-community/"
            title="Visualizing language variation in Atlanta on Twitter"
          >
          <b-icon 
            icon="twitter" 
            font-scale="3"
          ></b-icon>
          <span style="margin: 0.5em">Share on twitter</span>
          </ShareNetwork>
        </b-button>
        <b-img>
        </b-img>
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
  min-height: 100vh;
}


#thanks-content {
  display: flex;
  flex-direction: column;
  padding: 3em;
}

.thanks-text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
}

#thanks-image-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
}

.share-network-twitter {
  display: flex;
  align-items: center;
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