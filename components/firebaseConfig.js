// import * as firebase from 'firebase';
// import firebase from 'firebase/app';
// // import '@firebase/firestore';
// // import {firebase} from "firebase/compat/app";
// // import { firebase } from "@firebase/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { initializeApp } from 'firebase/app';

// const config={
//     apiKey: "AIzaSyDc4pQ7M49mqJ4m9fa_EdCH_uUDSl00jVI",
//     authDomain: "airbnb-f88a9.firebaseapp.com",
//     projectId: "airbnb-f88a9",
//     storageBucket: "airbnb-f88a9.appspot.com",
//     messagingSenderId: "334551186520",
//     appId: "1:334551186520:web:1527e4756485e8561a5e2d"
// }

// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }

// export default firebase ;



// Import the functions you need from the SDKs you need



import {getFirestore} from "firebase/firestore"

import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDc4pQ7M49mqJ4m9fa_EdCH_uUDSl00jVI",
    authDomain: "airbnb-f88a9.firebaseapp.com",
    projectId: "airbnb-f88a9",
    storageBucket: "airbnb-f88a9.appspot.com",
    messagingSenderId: "334551186520",
    appId: "1:334551186520:web:1527e4756485e8561a5e2d"
};



// const firebaseConfig = {

//   apiKey: "AIzaSyDcXaIZfczE_iyoYlB_C_J8uA3FnIxFpI0",

//   authDomain: "first-project-iti.firebaseapp.com",

//   databaseURL: "https://first-project-iti-default-rtdb.firebaseio.com",

//   projectId: "first-project-iti",

//   storageBucket: "first-project-iti.appspot.com",

//   messagingSenderId: "725297701412",

//   appId: "1:725297701412:web:a73923bb4d9ccf285deeb1"

// };



// Initialize Firebase

let app;



app = initializeApp(firebaseConfig);



const auth = getAuth(app);



//initialize firestore



const db = getFirestore(app);



export { auth };

export { db };



