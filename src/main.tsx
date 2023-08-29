import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext.tsx";
import CategoryContextProvider from "./contexts/CategoryContext.tsx";
import CartContextProvider from "./contexts/CartContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <CategoryContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
);
