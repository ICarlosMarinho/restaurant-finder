import React from "react";

import { PrimaryButton, SecondaryButton, AlertButton } from "./style";

const Button: React.FC<Props> = ({ children, buttonType }) => {
  if (buttonType == "primary") return <PrimaryButton>{children}</PrimaryButton>;
  else if (buttonType == "secondary")
    return <SecondaryButton>{children}</SecondaryButton>;
  else if (buttonType == "alert") return <AlertButton>{children}</AlertButton>;
  else throw new Error("Invalid buttonType provided");
};

interface Props {
  buttonType: string;
}

export default Button;
