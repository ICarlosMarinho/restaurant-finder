import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-areas:
    "sidebar main"
    "sidebar main"
    "footer footer";
  grid-template-rows: auto auto 30px;
  grid-template-columns: 25% auto;
`;
