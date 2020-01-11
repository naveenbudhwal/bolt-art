<template>
  <div class="login">
    <img class="bolt-logo" src="../assets/Bolt logo.svg" alt="Bolt Logo">
    <div class="heading">Welcome back <span>Tejas</span></div>
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login" class="login-btn">Login</button>
    <div class="copyright">© {{year}} Bolt Art. All rights reserved</div>
  </div>
</template>

<script>

let d = new Date();
let y = d.getFullYear()

import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      year: y
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
        this.$router.replace('post-artwork')
      }).catch((error) => {
        console.log('Error logging in ' + error)
      })
    }
  }
}
</script>

<style scoped>

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}

.bolt-logo {
  width: 7em;
  height: auto;
  margin: 2em 0 0;
}

.heading {
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  margin: 1em 0;
  position: relative;
  z-index: 1;
  text-align: center;
}

.heading span {
  display: block;
}

.heading span::before {
  content: ''; 
  position: absolute;
  width: 3em;
  height: 0.35em;
  background: linear-gradient(to right, #fbb034, #ffdd00);
  bottom: 0;
  right: 0;
  margin-right: 2.5em;
  z-index: -1;
  /* opacity: 70%; */
}

input {
  outline: none;
  border: none;
  margin: 1em 0;
  border-bottom: 2px solid #dfe1e5;
  padding: 0.6em;
  width: 20%;
  transition: all 0.3s ease-in-out;
}

input:focus {
  border-bottom: 2px solid #ffdd00;
}

.login-btn {
  border: none;
  background: linear-gradient(to right, #fbb034, #ffdd00);
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  padding: 10px 20px;
  border-radius: 24px;
  color: #fff;
  font-weight: 6  00;
  margin: 1em 0;
  cursor: pointer;
}

.copyright {
  position: absolute;
  bottom: 1em;
  font-size: 0.9rem;
}

@media only screen and (max-width: 576px) {
  input {
    width: 50%;
  }
}

</style>