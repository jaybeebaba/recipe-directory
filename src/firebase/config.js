import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCAU5wV8RwAKdbz55yExItmzje_JYAToPw",
    authDomain: "recipes-directory-1b733.firebaseapp.com",
    projectId: "recipes-directory-1b733",
    storageBucket: "recipes-directory-1b733.appspot.com",
    messagingSenderId: "782318925307",
    appId: "1:782318925307:web:f78b6c7b446396a307875e"
  };

//   initialize firebase

firebase.initializeApp(firebaseConfig)

// initialize services

const projectFirestore = firebase.firestore()

export { projectFirestore }