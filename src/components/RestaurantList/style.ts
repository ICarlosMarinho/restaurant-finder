import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  padding: 2px 0;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.lighterGray};
  scroll-behavior: smooth;
`;
