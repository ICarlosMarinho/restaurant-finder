import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.title};
`;

export { StyledTitle };
