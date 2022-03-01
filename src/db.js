// import { initializeApp } from "firebase/app";
// import "firebase/database";


// const firebaseConfig = {
//   apiKey: "*******************",
//   authDomain: "*******************",
//   databaseURL: "*******************",
//   projectId: "*******************",
//   storageBucket: "*******************",
//   messagingSenderId: "*******************",
//   appId: "*******************"
// }

// // Initialize Firebase
// const db = initializeApp(firebaseConfig);
// export default db;




import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID
}

const db = firebase.initializeApp(config);
export default db;

