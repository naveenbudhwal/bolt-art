import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artworks: [
      {
        id: 14,
        name: "Jotaro's Might",
        url: 'https://i.imgur.com/tJm4b6j.jpg',
        tag: ['# anime'],
        desc: ["A Mash-Up of Jotaro Kujo and AllMight. He has Power Erupting within him as he's ready to TakeOver the World 🌍", "Bow down to the King or you shall be destined severe Punishment ⚡"]
      },
      {
        id: 1,
        name: 'Phoenix',
        url: 'https://i.imgur.com/Fy1XyVT.jpg',
        tag: ['# Digital Art'],
        desc: ["A drawing I made with the Phoenix in mind and my brother, Naveen Budhwal really brought it to life", "With the wonderful and eye-catching backgrounds, and the pretty little shades of blue, he really made it look just as how I had imagined it to be. I definitely couldn't have done this without him ❤️"]
      },
      {
        id: 2,
        name: 'Sven',
        url: 'https://i.imgur.com/lCMeRNX.jpg',
        tag: ['# minecraft', '# Fan Art'],
        desc: ["The greatest and the most awesome dog 🐶 out there in the gaming world 🎮", "The best dog for adventures with the boys and the most loyal one as well 😃", "Pewdiepie you sure have done a wonder by bringing him along ❤️"]
      },
      {
        id: 15,
        name: 'Start',
        url: 'https://i.imgur.com/ALoY5yD.jpg',
        tag: ['# Quote'],
        desc: ["Every end is a new beginning!!"]
      },
      {
        id: 3,
        name: 'Burn it down',
        url: 'https://i.imgur.com/EK3i5QM.jpg',
        tag: ['# Abstract', '# fire'],
        desc: ["3 Colour Challenge", "Light the fire within 🔥"]
      },
      {
        id: 4,
        name: 'Light Yagami',
        url: 'https://i.imgur.com/mqnnf6y.jpg',
        tag: ['# DeathNote', '# Anime'],
        desc: ["I am justice!"]
      },
      {
        id: 16,
        name: 'The Arrival',
        url: 'https://i.imgur.com/M04EWff.jpg',
        tag: ['# Fan Art', '# Comic'],
        desc: ["This is my interpretation of Dax's Arrival !"]
      },
      {
        id: 5,
        name: 'Levi Ackerman',
        url: 'https://i.imgur.com/uy6KYQQ.jpg',
        tag: ['# AttackOnTitan', '# Anime'],
        desc: ["The Most Badass Assassin ⚡ in the history of anime !", "My favourite character 😃 from Attack on Titan", "Go check out the anime. It's the most dope one ever made and will surely win your heart ❤️"]
      },
      {
        id: 6,
        name: 'Dax',
        url: 'https://i.imgur.com/i7WHr96.jpg',
        tag: ['# Fan Art'],
        desc: ["Really worked hard on this one. Go and check out ZHC on Youtube!", "He is Awesome ✌🏻 and so is his Art ❤️"]
      },
      {
        id: 7,
        name: 'Pewdiepie',
        url: 'https://i.imgur.com/rbvPkad.jpg',
        tag: ['# Fan Art'],
        desc: ["Art is Life 🖤 and Life is an Art ⚡"]
      },
      {
        id: 8,
        name: 'Beauty',
        url: 'https://i.imgur.com/YsVRAJA.jpg',
        tag: ['# Shade'],
        desc: ["Magical Eyes, Beautiful Lies!!"]
      },
      {
        id: 9,
        name: 'Pewdiepie',
        url: 'https://i.imgur.com/Ot1ZNWg.jpg',
        tag: ['# Fan Art'],
        desc: ["A quick one but I love it 💙🖤"]
      },
      {
        id: 10,
        name: 'HeatBlast 2.0',
        url: 'https://i.imgur.com/MdkW57G.jpg',
        tag: ['# Ben10'],
        desc: ["I present to you, HeatBlast 2.0 ⚡🔥", "The New and Improved Alien ✨", "Let's kick some A$$, the OldSchool Way 🌹"]
      },
      {
        id: 11,
        name: 'Feelings',
        url: 'https://i.imgur.com/MsyVwC9.jpg',
        tag: ['# Colours'],
        desc: ["Dive into the imagination and the loneliness shall go away!"]
      },
      {
        id: 12,
        name: 'PUBG',
        url: 'https://i.imgur.com/LuspWhM.jpg',
        tag: ['# Game', '# Fan Art'],
        desc: ["Light the Match and Be the Fire 🔥"]
      },
      {
        id: 13,
        name: 'Gorgeous',
        url: 'https://i.imgur.com/bZlxWRM.jpg',
        tag: ['# WaterColours'],
        desc: ["Bring Imagination to Life ⚡"]
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    artwork: state => id => {
      return state.artworks.filter(p => p.id === Number(id))[0];
    }
  }
})
