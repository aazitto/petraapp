import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7Lk9gVqMeLQ_3m5zzj63KlltAUUL0N5Q",
    authDomain: "mg-network-petra.firebaseapp.com",
    projectId: "mg-network-petra",
    storageBucket: "mg-network-petra.appspot.com",
    messagingSenderId: "236243323860",
    appId: "1:236243323860:web:bda293ccb429f9d6ece441",
    measurementId: "G-GE8FSD9W8T"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();