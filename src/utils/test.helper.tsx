import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { rootReducer } from "../store/root-reducer";
import Theme from "../Theme";

export const renderWithRedux = (
  component: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState
    }),
    ...renderOptions
  }: {
    preloadedState?: Partial<RootState>;
    store?: any;
  }
) => {
  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    return (
      <Theme>
        <BrowserRouter>
          <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      </Theme>
    );
  };

  return render(component, { wrapper: Wrapper, ...renderOptions });
};
