import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  font-weight: 600;
  transition: all 0.5s ease;
  font-family: "Poppins", sans-serif;

  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;

export const Icon = styled.div`
  margin-right: 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
`;
