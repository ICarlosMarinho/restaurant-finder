import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #app-root {
    width: 100%;
    height: 100vh;
  }
`;

export default ResetStyle;
