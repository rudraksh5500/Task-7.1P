import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-SDbUKk4WGAwgp14Zh3jQ7JAuUzikyk8",
  authDomain: "sit-313-task-98b7b.firebaseapp.com",
  projectId: "sit-313-task-98b7b",
  storageBucket: "sit-313-task-98b7b.appspot.com",
  messagingSenderId: "702979478594",
  appId: "1:702979478594:web:f43b3b605da0a7164f09db",
  measurementId: "G-N1YDFSK840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);



