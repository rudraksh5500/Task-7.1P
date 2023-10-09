import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFiretore,
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-SDbUKk4WGAwgp14Zh3jQ7JAuUzikyk8",
  authDomain: "sit-313-task-98b7b.firebaseapp.com",
  databaseURL: "https://sit-313-task-98b7b-default-rtdb.firebaseio.com",
  projectId: "sit-313-task-98b7b",
  storageBucket: "sit-313-task-98b7b.appspot.com",
  messagingSenderId: "702979478594",
  appId: "1:702979478594:web:f43b3b605da0a7164f09db",
  measurementId: "G-N1YDFSK840"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export function SignInWithGooglePopup() {
  return signInWithPopup(auth, provider);
}
export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth.email) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error in creating", error.message);
    }
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
