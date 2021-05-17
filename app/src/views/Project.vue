<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide
        id="page-1"
        img-blank
      >
        <div class="content">
          <h1>Exploring patterns of language variation on social media</h1>
          <h2>A case study in Atlanta online communities</h2>
          <p>Team: Yuebin Dong, Jiang Hang, Amanda Horne, Diego Lestani
          </p>
          <b-button class="button-blue" href="/final-project-atlanta-community/#/viz" variant="primary">Go to Our App</b-button>
          <b-button class="button-blue" href="https://github.com/6859-sp21/final-project-atlanta-community" variant="primary">Go to Our Github</b-button>
          <div class="screenshots">
            <b-img class="screenshot" :src="require('../assets/Image1.png')"></b-img>
            <b-img class="screenshot" :src="require('../assets/Image2.png')"></b-img>
            <b-img class="screenshot" :src="require('../assets/Image3.png')"></b-img>
          </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        id="page-2"
        img-blank
      >
        <div class="content">
          <h1>Abstract</h1>
          <p>
          Our team will explore how different communities in Atlanta perceive language in different ways. To do this, we’ll be using a dataset of 149 local communities with information about their online behavior on Twitter.  Information at the twitter account level allowed us to create summary statistics at the community level such as  community size,  average number of followers, friends and tweets and understand what are the top follows and topic words in each community. Following a specific methodology, deviations from the normal language can be measured and these deviations are called semantic change. 
          Our main goal is that the user can understand the semantic change in social media across Atlanta’s communities and have a guide for current local trends online. Examples of potential users  are journalists, politicians and society as a whole.
          </p>
          <b-button class="button-blue" href="" variant="primary">Go to the Full Paper</b-button>
          <b-button class="button-blue" href="" variant="primary">Go to the Full Dataset</b-button>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        id="page-3"
        img-blank
      >
        <div class="content">
          <h1>Demo</h1>
          <div id="video">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            allowfullscreen
          ></b-embed>
          </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide 
        id="page-4"
        img-blank>
        <div class="content">
        <h1>Instructions</h1>
        <h5>Run Locally</h5>
        <ol>
          <li>Clone the clone the repository to local</li>
          <li>The datasets are in folder <code>root/data</code></li>
          <li><code>$cd</code> into folder <code>root/app</code> to view or modify the web application</li>
          <li>run <code>$npm install</code> to install all dependices</li>
          <li>run <code>$npm serve</code> to preview locally at <code>http://localhost:8080/final-project-atlanta-community/</code></li>
        </ol> 
        <h5>Deploy to Github</h5>
        <ol>
          <li><code>$cd</code> into folder <code>root/app</code></li>
          <li>run <code>$chmod +x ./deploy.sh</code> to make the deployment script executable</li>
          <li>run <code>$./deploy.sh</code> to deploy to Github Pages</li>
        </ol> 
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
h1 {
  text-align: left;
}

h2 {
  text-align: left;
}

h5 {
  text-align: left;
}

p {
  text-align: left;
}

ol {
  text-align: left;
}

#carousel-1 {
  height: 100vh;
}

#page-1 {
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.screenshots {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.screenshot {
  width: 30%;
  max-width: 300px;
  height: auto;
}

#page-2 {
  height: 100vh;
}

#page-3 {
  height: 100vh;
}

#page-4 {
  height: 100vh;
}

.carousel-caption {
  top: 0;
}

.button-blue {
  margin-bottom: 1em;
}

#video {
  min-width: 65vw;
}

</style>
