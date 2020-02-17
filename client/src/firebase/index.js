import firebase from 'firebase';
import {firebaseConfig} from 'Constants/defaultValues'
// import {fireaseReducer} from 'firebaseReducer';


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
/*
const firebaseConfig = {
  apiKey: "AIzaSyCMsHiLlyJw2JoM49crHN7nQHXcFOYl-6o",
  authDomain: "university-management-project.firebaseapp.com",
  databaseURL: "https://university-management-project.firebaseio.com",
  projectId: "university-management-project",
  storageBucket: "university-management-project.appspot.com",
  messagingSenderId: "393146462059",
  appId: "1:393146462059:web:2de96c6563d03592dd662e",
  measurementId: "G-QHB7HKMM2V"
};
*/ 
export {
    auth,
    database
};
