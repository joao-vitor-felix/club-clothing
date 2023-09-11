import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  height: 100%;
  width: 192rem;
  display: grid;
  grid-template-areas:
    "a b"
    "c c"
    "d e";
  grid-gap: 1.5rem;
  padding: 3rem;

  & div:nth-child(1) {
    grid-area: a;
  }

  & div:nth-child(2) {
    grid-area: b;
  }

  & div:nth-child(3) {
    grid-area: c;
  }

  & div:nth-child(4) {
    grid-area: d;
  }

  & div:nth-child(5) {
    grid-area: e;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    & div:nth-child(1) {
      flex: 1;
    }
    & div:nth-child(2) {
      flex: 1;
    }
    & div:nth-child(3) {
      flex: 1;
    }
    & div:nth-child(4) {
      flex: 1;
    }
    & div:nth-child(5) {
      flex: 1;
    }
  }
`;
