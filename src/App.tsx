import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Theme from "./Theme";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Theme>
    </>
  );
}

export default App;
