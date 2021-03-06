<template>
  <div class="post-art">
    <div class="heading">Post Artwork</div>
    <input name="art-name" v-model="artwork.name" type="text" placeholder="Name" />
    <input v-model="artwork.image" type="text" placeholder="Image URL" />
    <div class="col">
      <div class="row">
        <input v-model="tag" type="text" placeholder="tags" />
        <button class="add-btn" @click="addMoreTags">Add More</button>
      </div>
      <div class="desc" v-for="(tag,i) in artwork.tags" :key="i">
        {{tag}}
        <div class="close-btn" @click="deleteTags(tag)">X</div>
      </div>
    </div>
    <div>
      <div class="row">
        <textarea v-model="desc" name="desc" id cols="30" rows="4" placeholder="Description"></textarea>
        <button class="add-btn" @click="addMoreDesc">Add More</button>
      </div>
      <div class="desc" v-for="(desc,i) in artwork.description" :key="i">
        {{desc}}
        <div class="close-btn" @click="deleteDesc(desc)">X</div>
      </div>
    </div>
    <button class="post-btn" @click="postArtwork">Post</button>
    <button class="sign-out" @click="logout">Logout</button>
  </div>
</template>

<script>
import db from "../firebase";
import firebase from "firebase";

export default {
  name: "postArtwork",
  data() {
    return {
      artwork: {
        name: "",
        image: "",
        tags: [],
        description: [],
        timestamp: new Date()
      },
      tag: "",
      desc: ""
    };
  },
  methods: {
    postArtwork() {
      this.addMoreTags();
      this.addMoreDesc();
      db.collection("artworks")
        .add(this.artwork)
        .then(docRef => {
          // console.log("Document written with ID: ", docRef.id);
          this.eraseInput();
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    },
    addMoreTags() {
      this.artwork.tags.push(this.tag);
      this.tag = "";
    },
    addMoreDesc() {
      this.artwork.description.push(this.desc);
      this.desc = "";
    },
    eraseInput() {
      this.artwork.name = "";
      this.artwork.image = "";
      this.artwork.tags.length = 0;
      this.artwork.description.length = 0;
      this.tag = "";
      this.desc = "";
    },
    deleteTags(tag) {
      const index = this.artwork.tags.indexOf(tag);
      if(index > -1) {
        this.artwork.tags.splice(index, 1);
      }
    },
    deleteDesc(desc) {
      const index = this.artwork.description.indexOf(desc);
      if(index > -1) {
        this.artwork.description.splice(index, 1);
      }
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("artworks");
        });
    }
  }
};
</script>

<style scoped>
.post-art {
  display: flex;
  flex-direction: column;
  padding: 2em;
  width: 40%;
  border-radius: 1em;
  margin: auto;
}

.heading {
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.3em;
  font-weight: 400;
  position: relative;
  z-index: 1;
  margin: 1em 0;
  color: #2f4858;
}

.heading::before {
  content: "";
  position: absolute;
  width: 3em;
  background: linear-gradient(to right, #fbb034, #ffdd00);
  height: 0.3em;
  bottom: 0.08em;
  z-index: -1;
  margin-left: -0.45em;
}

.row {
  display: flex;
  align-items: center;
}

.col {
  flex-direction: column;
}

input {
  margin: 1.2em 0;
  border: none;
  border-bottom: 2px solid #dfe1e5;
  /* border-radius: 1em; */
  padding: 0.6em;
}

input:focus {
  border-bottom: 2px solid #ffdd00;
  outline: none;
}

textarea {
  border: 2px solid #dfe1e5;
  border-radius: 1em;
  padding: 0.6em;
}

textarea:focus {
  outline: none;
  border: 2px solid #ffdd00;
}

.desc {
  background: #96B1AC;
  color: #fff;
  padding: 0.5em;
  border-radius: 0.4em;
  margin: 0.5em auto;
  font-weight: 500;
  position: relative;
}

.close-btn {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 1em;
}

.add-btn {
  background: #c25450;
  border: none;
  padding: 5px 10px;
  color: #fff;
  font-weight: 600;
  border-radius: 1em;
  margin: 0 0.8em;
  cursor: pointer;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.post-btn {
  background: linear-gradient(to right, #fbb034, #ffdd00);
  border: none;
  padding: 4px 20px;
  width: 6em;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 500;
  border-radius: 1em;
  align-self: center;
  margin: 2em 0 0;
  cursor: pointer;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.sign-out {
  border: none;
  background: #c25450;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 2em;
  align-self: center;
  color: #fff;
  font-weight: 600;
  margin: 1em 0;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.sign-out:hover {
  background: #c25450;
  color: #fff;
}

@media only screen and (max-width: 576px) {
  .post-art {
    width: 60%;
    padding: 1.5em;
  }
  .row {
    flex-direction: column;
  }
  .add-btn {
    margin: 0.5em 0;
    font-size: 0.7rem;
  }
  .post-btn {
    font-size: 1.3rem;
  }
}
</style>