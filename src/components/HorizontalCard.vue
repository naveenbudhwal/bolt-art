<template>
  <div class="horizontal-card">
    <div class="picture">
      <img :src="Picture" class="card-img" alt="artwork-image">
    </div>
    <div class="horizontal-card-body">
      <h5 class="horizontal-card-title"> {{Heading}}</h5>
      <hr>
      <p class="horizontal-card-text" v-for="(line,i) in Body" :key="i"> 
        {{line}} 
      </p>
    </div>
    <div class="cta-btn">
      <button @click="deleteArtwork" class="delete-btn">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalCard',
  props: {
    Picture: String,
    Heading: String,
    Body: Array,
    artId: String
  },
  methods: {
    deleteArtwork() {
      this.$emit('delete-art', this.$props.artId)
    }
  }
};
</script>

<style>

a {
  text-decoration: none;
}

.horizontal-card {
  display: flex;
  background: #fff;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  padding: 2em;
  border-radius: 15px;
  max-width: 800px; 
  margin: 1.8em auto;
} 

.picture {
  display: flex;
  justify-content: center;
  width: 30%; 
}

.card-img {
  width: 80%;
  height: auto;
  border-radius: 1em;
}

.horizontal-card-body {
  align-self: center;
  margin: 0 20px;
  width: 70%;
}

.horizontal-card-title {
  margin-bottom: 7px;
  color: #2f4858;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.6rem;
}

.horizontal-card-text {
  font-weight: 400;
  text-align: justify; 
  margin: 0;
  font-size: 1rem;
  color: #2f4858;
}

.cta-btn {
  margin: auto;
}

.delete-btn {
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

hr {
  width: 20%;
  margin: 10px 0;
  height: 5px;
  background: linear-gradient(to right, #fbb034, #ffdd00);
  border-radius: 5px;
  border: none;
}

@media only screen and (max-width: 768px) {
  .horizontal-card-title, .horizontal-card-text {
    text-align: center;
  }
  .horizontal-card {
    flex-direction: column;
    margin: 30px 10%;
  }
  .picture {
    width: 100%;
  }
  .card-img {
    border-radius: 0.5em;
  }
  .horizontal-card-title {
    margin: 10px 0;
  }
  .horizontal-card-text {
    margin-bottom: 20px;
  }
  hr {
    margin: 10px auto;
  }
}

</style>