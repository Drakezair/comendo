import { useContext, useEffect, useState } from "react";
import { AuthContext, FirebaseContext } from "../contexts";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function UseAuth({ children }) {
  const { firebaseApp } = useContext(FirebaseContext);
  const authFirebase = firebaseApp ? getAuth(firebaseApp) : null;
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (authFirebase) {
      onAuthStateChanged(authFirebase, (user) => {
        if (user) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      });
    }
  }, [authFirebase]);

  const login = ({ email, password }) =>
    signInWithEmailAndPassword(authFirebase, email, password);

  const logout = () => signOut(authFirebase);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
