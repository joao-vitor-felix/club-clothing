import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  width: 50rem;
  height: 100vh;
  position: fixed;
  top: 6rem;
  right: 0;
  z-index: 10;
  padding: 2rem;
  overflow: scroll;
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
