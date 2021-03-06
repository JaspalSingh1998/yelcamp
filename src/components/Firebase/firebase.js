import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyAk7D5thV8C7Uut7eDmSdBZVMqKLTCFyWY",
  databaseURL: "https://yelpcamp-ecec4-default-rtdb.firebaseio.com",
  authDomain: "yelpcamp-ecec4.firebaseapp.com",
  projectId: "yelpcamp-ecec4",
  storageBucket: "yelpcamp-ecec4.appspot.com",
  messagingSenderId: "29741185375",
};

class Firebase {
  constructor() {
    initializeApp(config);
    this.auth = getAuth();
  }
  // *************** Auth API ******************
  doCreateUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

  doUpdateProfile = (displayName) =>
    updateProfile(this.auth.currentUser, {
      displayName,
    });

  doSignOut = () => signOut(this.auth);
}

export default Firebase;
