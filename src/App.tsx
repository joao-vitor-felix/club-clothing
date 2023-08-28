import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import useUserContext from "./hooks/useUserContext";
import Theme from "./Theme";
import { userConverter } from "./firebase/firestore.converters";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const { loginUser } = useUserContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const querySnapshot = await getDocs(
          query(
            collection(db, "users").withConverter(userConverter),
            where("id", "==", user.uid)
          )
        );
        const userFromFirestore = querySnapshot.docs[0]?.data();
        return loginUser(userFromFirestore);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Theme>
      <GlobalStyles />
      <ToastContainer style={{ fontSize: "1.8rem" }} />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </Theme>
  );
}

export default App;
