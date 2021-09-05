import React from "react";
import { StyledTitle } from "./style";

const Title: React.FC = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
