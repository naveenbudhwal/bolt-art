<template>
  <div class="art-detail">

    <loading-spinner v-if="loading"></loading-spinner>
    
    <div class="art" v-if="!loading">
      <img :src=artwork.image alt="Artwork">
    </div>
    <div class="art-info">
      <div class="art-name">{{artwork.name}}</div>
      <div class="tag">
        <div v-for="art_tag in artwork.tags" class="art-tag"># {{art_tag}}</div>
      </div>
      <hr class="material-hr">
      <div v-for="art_desc in artwork.description" class="art-desc">{{art_desc}}</div>
      <router-link to="/artworks">
        <button class="back-btn">Go Back</button>
    </router-link>
    </div>
    
  </div>
</template>

<script>

import db from '../firebase'
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default {
  name: 'art_detail',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      artwork: {},
      loading: true
    }
  },
  methods: {
    retrieveArt() {
      let docRef = db.collection("artworks").doc(this.$route.params.id);
      docRef.get().then((doc) => {
          this.loading = false
          if (doc.exists) {
            console.log(doc.data())
            this.artwork = doc.data()
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    }
  },
  created() {
    this.retrieveArt()
  }
}
</script>

<style scoped>

.art-detail {
  display: flex;
  height: 85vh;
}

.art {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.art img {
  width: 350px;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.art img:hover {
  transform: scale(1.2);
}

.art-info {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  flex-direction: column;
}

.art-name {
  font-size: 3em;
  font-weight: 500;
}

.art-tag {
  background: linear-gradient(to right, #fbb034, #ffdd00);
  padding: 5px 10px;
  border-radius: 15px;
  color: #fff;
  font-weight: 500;
  align-self: flex-start;
  margin: 5px 0;
  margin: 0 5px;
}

.tag {
  display: flex;
  margin: 5px 0;
}

.art-desc {
  padding-right: 15%;
  font-weight: 400;
  line-height: 1.3;
}

.material-hr {
  width: 20%;
  margin: 20px 0;
  height: 5px;
  background: #FFF9E8;
  border-radius: 5px;
  border: none;
}

.back-btn {
  background: #2F4858;
  color: #fff;
  font-weight: 500;
  border: none;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0, .14), 0 1px 18px 0 rgba(0,0,0,.12);
  padding: 10px 20px;
  border-radius: 24px;
  cursor: pointer;
  margin: 30px 0;
}

/* -----------Responsive Media Queries------------ */

@media only screen and (max-width: 576px) {
  .art-detail {
    flex-direction: column;
  }
  .art {
    width: 100%;
    margin: 50px 0;
  }
  .art img {
    width: 250px;
  }
  .art-name {
    padding: 0 5%;
  }
  .art-info {
    width: 100%;
    text-align: center;
    align-items: center;
  }
  .art-desc {
    padding: 0 10%;
  }
  .art-tag {
    align-self: center;
  }
  .material-hr {
    width: 30%;
  }
}
</style>