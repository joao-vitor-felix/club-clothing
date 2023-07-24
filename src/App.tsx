import { GlobalStyles } from "./GlobalStyles";
import Theme from "./Theme";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Header />
      </Theme>
    </>
  );
}

export default App;
