import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyCb3FLTJw2JUqOO_gx6OzNm9X5tcObLH4U",
        authDomain: "trw-db.firebaseapp.com",
        projectId: "trw-db",
        storageBucket: "trw-db.appspot.com",
        messagingSenderId: "295613318937",
        appId: "1:295613318937:web:6c980d973f6a3d7b872788",
        measurementId: "G-3VMD78X09B"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()