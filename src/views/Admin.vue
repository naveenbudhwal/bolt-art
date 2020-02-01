<template>
  <div class="admin-page">
    <loading-spinner v-if="loading" />
    <div class="artworks" v-if="!loading">
      <horizontal-card
        v-for="art in artworks"
        :key="art.id"
        :artId="art.id"
        :Heading="art.name"
        :Body="art.desc"
        :Picture="art.image"
        @delete-art="deleteArtwork"
        class="art-card"
      />
      <div class="cta-btn">
        <button class="logout-btn" @click="logout">Logout</button>
      </div>
      <div class="add-art">
        <router-link to="/post-artwork">
          <img class="plus-circle" src="../assets/plus-circle.svg" alt="Add Artwork button">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase";
import firebase from 'firebase'
import LoadingSpinner from "../components/LoadingSpinner.vue";
import HorizontalCard from '../components/HorizontalCard.vue'

export default {
  name: "Admin",
  components: {
    LoadingSpinner,
    HorizontalCard
  },
  data() {
    return {
      artworks: [],
      loading: true
    };
  },
  methods: {
    retreiveArtworks() {
      db.collection("artworks")
        .get()
        .then(querySnapshot => {
          this.loading = false;
          querySnapshot.forEach(doc => {
            const art = {
              id: doc.id,
              name: doc.data().name,
              image: doc.data().image,
              tags: doc.data().tags,
              desc: doc.data().description
            };
            this.artworks.push(art);
          });
        });
    },
    deleteArtwork(artId) {
      db.collection("artworks").doc(artId).delete().then(() => {
          console.log("Document successfully deleted!");
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("artworks");
        });
    }
  },
  created() {
    this.retreiveArtworks();
  }
};
</script>

<style scoped>

.art-card {
  transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.art-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.add-art {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out;
}

.add-art:hover {
  transform: translateY(-10px);
}

.plus-circle {
  width: 4em;
  height: auto;
}

.cta-btn {
  display: flex;
}

.logout-btn {
  border: none;
  background: #c25450;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 2em;
  align-self: center;
  color: #fff;
  font-weight: 600;
  margin: 1em auto;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

</style>