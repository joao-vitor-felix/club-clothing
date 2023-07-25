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

  div {
    &:nth-child(1) {
      grid-area: a;
    }

    &:nth-child(2) {
      grid-area: b;
    }

    &:nth-child(3) {
      grid-area: c;
    }

    &:nth-child(4) {
      grid-area: d;
    }

    &:nth-child(5) {
      grid-area: e;
    }
  }
`;
