import styled from "styled-components";

export const SidebarContainer = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;

  @media (max-width: 1012px) {
    row-gap: 10px;
    padding: 10px 0 0 0;
  }
`;

export const LogoImg = styled.img`
  width: auto;
  height: 100px;

  @media (max-width: 1012px) {
    height: 50px;
  }
`;
