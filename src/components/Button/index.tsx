import React from "react";

import { StyledButton, ButtonProps } from "./style";

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, colorType, buttonWidth, ...props }) => {
  return (
    <StyledButton colorType={colorType} buttonWidth={buttonWidth} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
