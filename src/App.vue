<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">
        <div class="logo">
          <img src="./assets/Bolt logo.svg" alt="logo" />
        </div>
      </router-link>
      <ul class="nav-links">
        <router-link to="/">
          <li @click="closeNavbar" class="nav-item">Home</li>
        </router-link>
        <router-link to="/artworks">
          <li @click="closeNavbar" class="nav-item">Artworks</li>
        </router-link>
        <router-link to="/about">
          <li @click="closeNavbar" class="nav-item">About</li>
        </router-link>
        <div class="social-nav">
          <a href="mailto:bolt.art2412@gmail.com" target="_blank" rel="noopener">
            <img src="./assets/envelope-regular.svg" alt="email">
          </a>
          <a href="https://www.instagram.com/bolt_art_/" target="_blank" rel="noopener">
            <img src="./assets/instagram-brands.svg" alt="instagram">
          </a>
          <a href="https://twitter.com/Bolt_Art_" target="_blank" rel="noopener">
            <img src="./assets/twitter-brands.svg" alt="twitter">
          </a>
        </div>
      </ul>

      <div id="nav-icon1" @click="openNavbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: "Navbar",
  methods: {
    openNavbar() {
      const navIcon = document.querySelector('#nav-icon1')
      const navLinks = document.querySelector('.nav-links')
      navIcon.classList.toggle('open2');
      navIcon.classList.toggle('fix');
      navLinks.classList.toggle('open');
    },
    closeNavbar() {
      const navIcon = document.querySelector('#nav-icon1')
      const navLinks = document.querySelector('.nav-links')
      navLinks.classList.remove('open')
      navIcon.classList.remove('open2')
      navIcon.classList.remove('fix')
    }   
  }
};
</script>


<style>

.social-nav {
  display: none;
}

.social-nav img {
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin: 0 35px;
  transition: all 0.3s ease-in-out;
}

#nav-icon1 {
  display: none;
  /* opacity: 0; */
  width: 33px;
  height: 33px;
  /* position: absolute; */
  /* margin: 50px auto; */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 2;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #434655;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  opacity: 0;
  top: 5px;
}

#nav-icon1 span:nth-child(2) {
  width: 25px;
  top: 15px;
}

#nav-icon1 span:nth-child(3) {
  top: 25px;
}

#nav-icon1.open2 span:nth-child(1) {
  opacity: 1;
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open2 span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open2 span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

#nav-icon1.fix {
  position: fixed;
  right: 0;
}


/* ---------------------------------- */

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  height: 15vh;
  /* background: lightcoral; */
  display: flex;
  align-items: flex-end;
}

.logo {
  margin-left: 60px;
  position: relative;
  z-index: 3;
}

.logo img {
  width: 40px;
}

.nav-links {
  padding: 0;
  margin: 0;
  margin-left: auto;
  display: flex;
  width: 35%;
  justify-content: space-around;
  margin-right: 60px;
}

.nav-item {
  list-style-type: none;
  /* padding: 0 50px; */
  font-size: 18px;
  font-weight: 500;
}

.navbar a {
  text-decoration: none;
  color: #2f4858;
  /* transition: all 0.3s ease-in-out; */
}

.navbar .nav-links a.router-link-exact-active {
  border-bottom: 3px solid #fbb034;
  height: 18px;
  /* width: fit-content; */
}

@media only screen and (max-width: 768px) {
  .social-nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .navbar {
    position: relative;
    width: 100%;
    /* padding: 0 50px; */
    justify-content: space-between;
  }
  #nav-icon1 {
    display: block;
    /* opacity: 1; */
    margin-right: 40px;
  }
  .nav-links {
    position: fixed;
    background: linear-gradient(to right, rgba(251,176,52, 0.9), rgba(255,221,0, 0.8));
    height: 48vh;
    width: 100%;
    margin-top: -10vh;
    border-radius: 20px;
    top: -100%;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    transition: all 0.6s ease-in-out;
    pointer-events: none;
    z-index: 2;
  }
  .nav-links a {
    padding: 25px 0;
    color: #000;
  }
  .nav-item {
    font-weight: 500;
  }
  .nav-links.open {
    top: 0;
    pointer-events: all;
  }
  .logo {
    margin-left: 40px;
  }
  .navbar .nav-links a.router-link-exact-active {
    border-bottom: none;
    color: #fff;
  }
  .navbar .nav-links a:hover {
    color: #fff;
  }
}

@media only screen and (max-width: 576px) {
  .nav-links {
    height: 75vh;
  }
}
</style>
