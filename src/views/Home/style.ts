import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-areas: "sidebar main";
  grid-template-rows: 100vh;
  grid-template-columns: 25% auto;

  @media (max-width: 1024px) {
    grid-template-columns: 35% auto;
  }

  @media (max-width: 1012px) {
    grid-template-areas:
      "sidebar"
      "main";
    grid-template-rows: min-content auto;
    grid-template-columns: 100%;
  }
`;
