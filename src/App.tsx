import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Theme from "./Theme";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Theme>
    </>
  );
}

export default App;
