import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import User from "./types/user.types";
import useUserContext from "./hooks/useUserContext";
import Theme from "./Theme";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const { loginUser } = useUserContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const querySnapshot = await getDocs(
          query(collection(db, "users"), where("id", "==", user.uid))
        );
        const userFromFirestore = querySnapshot.docs[0]?.data();
        return loginUser(userFromFirestore as User);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Theme>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </Theme>
  );
}

export default App;
