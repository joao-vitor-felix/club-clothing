import styled from "styled-components";
import Button from "../Button/Button";

type BackgroundProps = {
  $isCartOpen: boolean;
};

export const Background = styled.div<BackgroundProps>`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${({ $isCartOpen }) => ($isCartOpen ? "visible" : "hidden")};
  opacity: ${({ $isCartOpen }) => ($isCartOpen ? "1" : "0")};
  transition: all 0.5s ease;
`;

export const EscapeArea = styled.div`
  width: 75%;
  height: 100%;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  width: 40%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  overflow-y: scroll;

  @media screen and (max-width: 800px) {
    width: 70%;
    padding: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Total = styled.h3`
  font-size: 1.6rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PayButton = styled(Button)`
  margin-bottom: 5rem;
`;

export const Empty = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;
