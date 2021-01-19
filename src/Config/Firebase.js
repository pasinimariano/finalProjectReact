import firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQ9GWIU35JRFpuNhAzaCOCFwl2-QevEHA",
    authDomain: "comicswhamreact.firebaseapp.com",
    projectId: "comicswhamreact",
    storageBucket: "comicswhamreact.appspot.com",
    messagingSenderId: "559928447428",
    appId: "1:559928447428:web:537301821740f82abe1491"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth =  firebase.auth();
firebase.db = db;

export default firebase;