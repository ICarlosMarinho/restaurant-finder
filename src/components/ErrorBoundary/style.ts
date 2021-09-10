import styled from "styled-components";

export const ErrorBoundaryContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

export const ErrorTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.primary};
`;

export const ErrorText = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  font-family: ${(props) => props.theme.colors.darkerGray};
`;
