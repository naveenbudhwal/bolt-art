<template>
  <div class="photos">
    
    <loading-spinner v-if="loading"></loading-spinner>
    
    <div v-if="!loading">
      <stack :column-min-width="300" :gutter-width="15" :gutter-height="15" monitor-images-loaded>
        <stack-item v-for="(art, i) in artworks" :key="i" style="transition: transform 300ms">
          <router-link :to="{ name: 'art_detail', params: { id: art.id }}">
            <img class="artwork" :src="art.image" alt="BoltArt Artwork" />
          </router-link>
        </stack-item>
      </stack>

      <div class="social-nav">
        <a href="mailto:bolt.art2412@gmail.com" target="_blank" rel="noopener">
          <img src="../assets/envelope-regular.svg" alt="email">
        </a>
        <a href="https://www.instagram.com/bolt_art_/" target="_blank" rel="noopener">
          <img src="../assets/instagram-brands.svg" alt="instagram">
        </a>
        <a href="#" target="_blank" rel="noopener">
          <img src="../assets/twitter-brands.svg" alt="twitter">
        </a>
      </div> 
    </div>
  </div>
</template>

<script>

import LoadingSpinner from '../components/LoadingSpinner.vue'
import { Stack, StackItem } from "vue-stack-grid";
import db from '../firebase'

export default {
  name: "Bolt-Art",
  components: {
    Stack,
    StackItem,
    LoadingSpinner
  },
  data() {
    return {
      temp: [],
      artworks: [],
      loading: true
    };
  },
  methods: {
    retrieveArtworks() {
       db.collection('artworks').get()
      .then(querySnapshot => {
        this.loading = false
        querySnapshot.forEach(doc => {
          const art = {
            id: doc.id,
            name: doc.data().name,
            image: doc.data().image,
            tags: doc.data().tags,
            desc: doc.data().description
          }
          this.artworks.push(art)
          // this.temp.push(art)
        })
      })

      // this.artworks = this.temp.sort((a,b) => {
      //   return a.timestamp.seconds - b.timestamp.seconds
      // })

    }
  },
  created() {
    this.retrieveArtworks()
  }
};
</script>

<style scoped>

.photos {
  width: 80vw;
  margin: 8% auto 0 auto;
}

.artwork {
  width: 100%;
  height: auto;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}

.artwork:hover {
  transform: translateY(-15px);
}

.social-nav {
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0;
}

.social-nav img {
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin: 0 70px;
  transition: all 0.2s ease-in-out;
}

.social-nav img:hover {
  transform: translateY(-8px);
}

/* ------------------Responsive Media Queries--------------------- */

@media only screen and (max-width: 576px) {
  .social-nav img {
    margin: 0 35px;
  }
}

</style>