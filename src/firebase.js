import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqBehG9aWscqq7u1Ilqit0debf3OZxoJc",
    authDomain: "my-chatt-202.firebaseapp.com",
    projectId: "my-chatt-202",
    storageBucket: "my-chatt-202.appspot.com",
    messagingSenderId: "587564277392",
    appId: "1:587564277392:web:59763dd1dfb4a6e5b24215",
    measurementId: "G-QJ3L4MWPFX"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }