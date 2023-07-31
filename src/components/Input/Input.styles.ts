import styled from "styled-components";

type CustomInputContainerProps = {
  hasError?: boolean;
};

export const Container = styled.input<CustomInputContainerProps>`
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.input.background};
  padding: 1rem 2rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  color: ${({ theme }) => theme.text.secondary};
  border: ${({ hasError, theme }) =>
    hasError ? `0.2rem solid ${theme.input.error}` : "none"};
  font-family: "Poppins", sans-serif;

  &::placeholder {
    color: ${({ hasError, theme }) =>
      hasError ? theme.input.error : theme.input.placeholder};
  }

  &:focus {
    outline: ${({ hasError, theme }) =>
      hasError ? "none" : `0.2rem solid ${theme.input.placeholder}}`};
  }
`;
