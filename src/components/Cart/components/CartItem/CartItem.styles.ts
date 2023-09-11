import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  column-gap: 2rem;
`;

export const Image = styled.img`
  width: 18rem;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;

  @media screen and (max-width: 800px) {
    width: 12rem;
  }

  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 15rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Text = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const buttonStyles = css`
  font-size: 2rem;
  cursor: pointer;
`;

export const Remove = styled(AiOutlineClose)`
  ${buttonStyles}
`;

export const Decrease = styled(AiOutlineMinus)`
  ${buttonStyles}
`;

export const Increase = styled(AiOutlinePlus)`
  ${buttonStyles}
`;
