import React from "react";

import { StyledButton, ButtonProps } from "./style";

const Button: React.FC<ButtonProps> = ({
  children,
  colorType,
  buttonWidth,
}) => {
  return (
    <StyledButton colorType={colorType} buttonWidth={buttonWidth}>
      {children}
    </StyledButton>
  );
};

export default Button;
