import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageNotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const BackToHomeButton = styled(Link)`
  background-color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.title};
  color: #fff;
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
