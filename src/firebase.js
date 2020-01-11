import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD52B86Bd7TXsha9q0UxsFscqlZwx_-BDk",
  authDomain: "bolt-art-baca5.firebaseapp.com",
  databaseURL: "https://bolt-art-baca5.firebaseio.com",
  projectId: "bolt-art-baca5",
  storageBucket: "bolt-art-baca5.appspot.com",
  messagingSenderId: "11615358527",
  appId: "1:11615358527:web:1a3ee1b1bf7a41f236b28a",
  measurementId: "G-N8KW70NZRE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebaseApp.firestore()
// firestore.settings({timestampsInSnapshots: true})

export default firestore