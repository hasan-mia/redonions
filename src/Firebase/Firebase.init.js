// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1Ryf7WT0vQdkbd-_1C7prprfylyQQuiY",
    authDomain: "redonion-tailwind.firebaseapp.com",
    projectId: "redonion-tailwind",
    storageBucket: "redonion-tailwind.appspot.com",
    messagingSenderId: "728420414255",
    appId: "1:728420414255:web:e83a1a722fd96cf92627da",
    measurementId: "G-WZRE9W158C"
    // apiKey:process.env.REACT_APP_apiKey,
    // authDomain:process.env.REACT_APP_authDomain,
    // projectId:process.env.REACT_APP_projectId,
    // storageBucket:process.env.REACT_APP_storageBucket,
    // messagingSenderId:process.env.REACT_APP_messagingSenderId,
    // appId:process.env.REACT_APP_appId,
    // measurementId:process.env.REACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default auth;