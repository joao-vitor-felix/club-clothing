import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

export const Navigation = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  gap: 0.2rem;
  text-align: center;
`;

export const Logo = styled(AiFillShopping)`
  font-size: 2.5rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Item = styled(Link)`
  font-weight: 600;
  font-size: 1.3rem;
`;
