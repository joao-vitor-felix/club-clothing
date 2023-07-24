import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  color: ${({ theme }) => theme.text.primary};
}

a {
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
}
`;
