import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import initializationAuthentication from "../Pages/Login/Firebase/firebase.initialize";

initializationAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Inside state change", user);
        setUser(user);
      }
    });
  }, []);

  return { signInUsingGoogle, user, logout, error };
};

export default useFirebase;
