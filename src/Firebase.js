// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAzTocjp5-6eBzY1yvoZrsnT2hMEej3qPQ",
    authDomain: "aednat-1d512.firebaseapp.com",
    projectId: "aednat-1d512",
    storageBucket: "aednat-1d512.appspot.com",
    messagingSenderId: "743851315693",
    appId: "1:743851315693:web:7b1429be56e92b8a9397e4",
    measurementId: "G-ZF4YEYRX0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);