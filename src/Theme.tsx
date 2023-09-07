import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export type ThemeType = {
  colors: {
    primary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  input: {
    background: string;
    placeholder: string;
    error: string;
  };
};

const theme = {
  colors: {
    primary: "#212529"
  },
  text: {
    primary: "#F8F9FA",
    secondary: "#343A40"
  },
  input: {
    background: "#E9ECEF",
    placeholder: "#6C757D",
    error: "#FF6A6A"
  }
};

const Theme = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
