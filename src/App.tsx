import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Theme from "./Theme";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";

function App() {
  onAuthStateChanged(auth, user => {
    console.log(user);
  });

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
