import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userConverter } from "./firebase/firestore.converters";
import { useDispatch } from "react-redux";
import Theme from "./Theme";
import Navigation from "./components/Navigation/Navigation";
import { loginUser } from "./store/user/user.slice";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const ProtectedRoute = lazy(
  () => import("./components/ProtectedRoute/ProtectedRoute")
);
const PaymentConfirmation = lazy(
  () => import("./pages/PaymentConfirmation/PaymentConfirmation")
);

function App() {
  const dispatch = useDispatch();

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
        return dispatch(loginUser(userFromFirestore));
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Theme>
      <GlobalStyles />
      <ToastContainer style={{ fontSize: "1.8rem" }} />
      <Suspense fallback={<Loading />}>
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
            <Route
              path="payment-confirmation"
              element={<PaymentConfirmation />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Theme>
  );
}

export default App;
