<template>
  <div class="about">
    <div class="row">
      <div class="first-half">
        <div class="heading">
          Hi<span class="color">,</span> I<span class="color">'</span>m <span class="bold">Tejas</span><span class="color bold">.</span>
        </div>
        <div class="sub-heading">The artist behind <span class="color bold">Bolt Art.</span></div>
        <div class="info">
          Art has been a passion of mine since childhood and I decided to bring it to life in the internet world. This website is a stamp of my online presence and showcases my art skills. Now you be the judge! 
        </div>
        <div class="input-info">
          <div class="content">Got any suggestions or creative ideas for artwork.<span class="new-line">Give your suggestions below</span></div>
          <a href="mailto:bolt.art2412@gmail.com?subject=Suggestions for artworks!" target="_blank" rel="noopener">
            <button id="cta">Suggestions</button>
          </a>
        </div>
      </div>
      <div class="second-half">
        <img class="artwork" src="../assets/about_pic.jpg" alt="Artwork" />
      </div>
    </div>
    <div class="social-nav">
      <div class="social-links">
        <a href="mailto:bolt.art2412@gmail.com" target="_blank" rel="noopener">
          <img src="../assets/envelope-regular.svg" alt="email">
        </a>
        <a href="https://www.instagram.com/bolt_art_/" target="_blank" rel="noopener">
          <img src="../assets/instagram-brands.svg" alt="instagram">
        </a>
        <a href="https://twitter.com/Bolt_Art_" target="_blank" rel="noopener">
          <img src="../assets/twitter-brands.svg" alt="twitter">
        </a>
      </div>
      <div class="copyright">
        © {{year}} Bolt Art. All rights reserved
      </div>
    </div>
  </div>
</template>

<script>

let d = new Date();
let y = d.getFullYear();

export default {
  name: "About",
  data() {
    return {
      year: y,
      suggestion: ''
    }
  }

};
</script>

<style scoped>
.about {
  display: flex;
  height: 85vh;
  color: #2f4858;
  flex-direction: column;
}

.row {
  display: flex;
  height: 75vh;
}

.first-half {
  width: 50%;
  height: 75vh;
  /* background: lightcoral; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
}

.second-half {
  width: 50%;
  height: 75vh;
  /* background: lightcoral; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.artwork {
  width: 80%;
  height: auto;
  z-index: -1;
}

.heading {
  font-size: 2em;
  font-weight: 500;
  margin: 10px 0;
}

.sub-heading {
  font-size: 1.4em;
  margin-bottom: 30px;
}

.info {
  font-size: 1.05em;
  line-height: 1.3;
  padding-right: 20%;
  margin-bottom: 50px;
}

.input-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.content {
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 20px;
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
  font-size: 1em;
  cursor: pointer; 
}

.social-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
}

.social-nav img {
  width: 21px;
  height: 21px;
  cursor: pointer;
  margin: 0 70px;
}

.copyright {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 0.9em;
}

.new-line {
  display: block;
}

.color {
  color: #FBB034;
}

.bold {
  font-weight: 600;
}

/* ------------------Responsive Media Queries----------------- */

@media only screen and (max-width: 768px) {
  .copyright {
    right: 50%;
    transform: translateX(50%);
  }
  .social-nav {
    padding-bottom: 10px;
  }
}

@media only screen and (max-width: 760px) {
  /* .about {
    flex-direction: column;
  } */
  .row {
    flex-direction: column;
  }
  .first-half {
    width: 100%;
    order: 2;
    padding: 0;
    text-align: center;
  }
  .second-half {
    width: 100%;
    order: 1;
    justify-content: center;
    align-items: center;
  }
  .info {
    padding: 0 5%;
  }
  .input-info {
    align-items: center;
  }
  .content {
    padding: 0 5%;
  }
  .social-nav {
    display: none;
  }
  #cta {
    margin-bottom: 20px;
  }
}
</style>