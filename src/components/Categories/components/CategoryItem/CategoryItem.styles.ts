import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: red;
  grid-gap: 1.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: color;
`;

export const Name = styled.div`
  color: #f8f9fa;
  text-align: center;
  background: rgba(233, 236, 239, 0.45);
  padding: 1rem 3rem;
  border-radius: 1rem;
  border: 0.1rem solid #212529;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;
  max-width: 60%;

  p {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 15rem;
  }
`;
