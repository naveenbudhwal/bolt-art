<template>
  <div class="home">
    <div class="first-half">
      <div class="name">
        Bolt Art
        <img class="text-back" src="../assets/text-back.svg" alt="Wavy background" />
      </div>
      <div class="content">
        <span class="new-line">Original art back to back 🖤 </span>
        <span class="new-line">ART IS MY HEART ❤️ </span>
      </div>
      <router-link to="/artworks">
        <button id="cta">Let's Go -></button>
      </router-link>
    </div>
    <div class="second-half">
      <img
        class="abstract-back"
        src="../assets/abstract_artist.svg"
        alt="abstract artist background"
      />
    </div>
    <img class="lines" src="../assets/lines.svg" alt="abstract line" />
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.home {
  display: flex;
}

.first-half {
  width: 50%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.second-half {
  width: 50%;
  height: 85vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
}

.name {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 7rem;
  color: #4c4637;
  /* background: url("../assets/wavy.svg") no-repeat; */
  position: relative;
}

.content {
  position: relative;
  font-weight: 400;
  font-size: 1.25em;
  padding: 0 15%;
  text-align: center;
  color: #2f4858;
  margin: 50px 0;
  line-height: 1.5;
}

#cta {
  border: none;
  background: linear-gradient(to right, #fbb034, #ffdd00);
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  padding: 9px 30px;
  border-radius: 24px;
  color: #fff;
  font-weight: 500;
  font-size: 1.1em;
  /* margin-top: 120px; */
  cursor: pointer;
}

.abstract-back {
  position: absolute;
  height: 93vh;
  z-index: -1;
}

.new-line {
  display: block;
}

/* ----------Shape styles-------------- */

.text-back {
  position: absolute;
  width: 4.5em;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  /* opacity: 60%; */
}

.lines {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 160px;
}

/* ---------------Responsive media queries-------------------- */

@media only screen and (max-width: 1024px) {
  .home {
    flex-direction: column;
  }
  .first-half {
    width: 100%;
  }
  .second-half {
    width: 100%;
    /* display: none; */
  }
  .name {
    font-size: 8rem;
  }
  .content {
    font-size: 1.2em;
    line-height: 1.4;
    padding: 0 15%;
    margin: 60px 0;
  }
  .lines {
    width: 18em;
  }
}

@media only screen and (max-width: 768px) {
  .name {
    margin: 50px 0;
  }
  .first-half {
    margin-top: -20px;
  }
  .second-half {
    display: none;
  }
  .lines {
    width: 12em;
  }
}

@media only screen and (max-width: 720px) {
  .name {
    font-size: 6rem;
  }
  .content {
    font-size: 0.9em;
    line-height: 1.5;
    margin: 40px 0;
  }
}

@media only screen and (max-width: 576px) {
  .name {
    font-size: 5rem;
    margin: 0;
  }
  .content {
    font-size: 1em;
  }
  .lines {
    width: 10em;
  }
}

@media only screen and (max-width: 450px) {
  .content {
    line-height: 1.5;
    margin: 40px 0;
  }
  .lines {
    width: 8em;
  }
}

@media only screen and (max-width: 400px) {
  .name {
    font-size: 4rem;
  }
  .content {
    font-size: 0.9em;
    line-height: 1.5;
  }
  .lines {
    width: 7em;
  }
}

@media only screen and (max-width: 360px) {
  .lines {
    width: 6em;
  }
}

@media only screen and (max-width: 325px) {
  .content {
    font-size: 0.8em;
  }
  #cta {
    font-size: 0.9em;
  }
  .lines {
    width: 5.5em;
  }
}
</style>