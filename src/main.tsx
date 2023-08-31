import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CategoryContextProvider from "./contexts/CategoryContext";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading/Loading";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <CategoryContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CategoryContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
