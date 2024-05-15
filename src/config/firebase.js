import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { errorToast, successToast } from "../utils/notify";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBKjt1_vByNhUjT0tveQjuRoz5PBUunfiE",
  authDomain: "react-ai-extension.firebaseapp.com",
  projectId: "react-ai-extension",
  storageBucket: "react-ai-extension.appspot.com",
  messagingSenderId: "510458035258",
  appId: "1:510458035258:web:d96a42b1446a39981b4903",
  measurementId: "G-8XV8EBPVBT",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(
  app,
  "https://react-ai-extension-default-rtdb.asia-southeast1.firebasedatabase.app/"
);
export const firestoreDB = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const handleLogin = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
export const verifyEmailLinkLogin = async ()=>{
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem('emailForSignIn');
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        window.localStorage.removeItem('emailForSignIn');
        successToast("Logged in successfully!")
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
  
}
export const handleEmailLinkLogin = async (email) => {
  const actionCodeSettings = {
    url: import.meta.env.VITE_HOST_URL || "http://localhost:5173",
    handleCodeInApp: true,
  };
  toast.promise(sendSignInLinkToEmail(auth, email, actionCodeSettings),{
    pending: "Sending login link!",
  }).then(() => {
    window.localStorage.setItem('emailForSignIn', email);
    successToast(`Login link sent to ${email}`)
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    if(errorCode ==="auth/invalid-email"){
      errorToast("Invalid email!")
    }
    else{
      errorToast("Some error occurred!")
    }
  });
};

export const logout = () => {
  signOut(auth);
};
