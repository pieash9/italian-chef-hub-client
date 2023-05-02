// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQNvENi-ZeI-UeuWqqWlxsWzgf_bB4Q90",
  authDomain: "italian-chef-hub-client.firebaseapp.com",
  projectId: "italian-chef-hub-client",
  storageBucket: "italian-chef-hub-client.appspot.com",
  messagingSenderId: "1066703258498",
  appId: "1:1066703258498:web:0021abf0e773fbc54d859b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}