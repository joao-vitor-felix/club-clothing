import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  height: 100%;
}

body {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  color: ${({ theme }) => theme.text.secondary};
}

a {
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
}

#root {
  height: 100%;
}
`;
