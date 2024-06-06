import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3qw2wOhbUYmkK9A_BKdD1Ssug6FGTo2A",
  authDomain: "app-moda-da72d.firebaseapp.com",
  projectId: "app-moda-da72d",
  storageBucket: "app-moda-da72d.appspot.com",
  messagingSenderId: "86257810237",
  appId: "1:86257810237:web:631a54d95e09d8f896e354",
  measurementId: "G-7SGJ34G30G",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
