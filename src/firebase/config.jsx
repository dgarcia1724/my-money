import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwdKS6HYjJB5gsp_ifC71d5laFHTuVR7o",
  authDomain: "mymoney-a3b60.firebaseapp.com",
  projectId: "mymoney-a3b60",
  storageBucket: "mymoney-a3b60.appspot.com",
  messagingSenderId: "641701647842",
  appId: "1:641701647842:web:6180840c5f63c110e615bb",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
