import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  padding: 2px 0;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.lighterGray};
  scroll-behavior: smooth;

  @media (max-width: 1012px) {
    flex-direction: row;
    max-width: 100%;
    overflow-x: auto;
    column-gap: 2px;
    row-gap: 0;
  }
`;
