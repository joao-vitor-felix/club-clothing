import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  border: none;
  padding: 1rem 1.5rem;
  font-weight: 600;
  transition: all 0.5s ease;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    transform: scale(1.05);
  }

  &:active {
    transform: translateY(0.3rem);
  }
`;

export const Icon = styled.div`
  margin-right: 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
`;
