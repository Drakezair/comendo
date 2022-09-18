import { useEffect, useState } from "react";
import { FirebaseContext } from "../contexts";
import { initializeApp } from "firebase/app";

export default function UseFirebase({ children }) {
  const [firebaseApp, setFirebaseApp] = useState(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCiyDlZA1E1Yw1JEvoniefNe7BCfkmDFng",
      authDomain: "comendo-dev.firebaseapp.com",
      projectId: "comendo-dev",
      storageBucket: "comendo-dev.appspot.com",
      messagingSenderId: "422581355321",
      appId: "1:422581355321:web:fdf982bceed34a6be31ee8",
      measurementId: "G-QVF2J8TF03",
    };

    const app = initializeApp(firebaseConfig);
    setFirebaseApp(app);
  }, []);

  return (
    <FirebaseContext.Provider value={{ firebaseApp }}>
      {children}
    </FirebaseContext.Provider>
  );
}
