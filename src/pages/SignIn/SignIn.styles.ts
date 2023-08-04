import styled from "styled-components";

type InputProps = {
  hasError?: boolean;
  ref: any;
};

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Headline = styled.p`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #6c757d;
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  label:nth-child(1) {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 1rem;
  color: ${({ theme }) => theme.input.error};
  font-size: 1.3rem;
`;

export const TestInput = styled.input<InputProps>`
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
