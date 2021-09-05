import styled from "styled-components";

export interface ButtonProps {
  colorType: string;
  buttonWidth?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.title};
  background-color: ${(props) => {
    switch (props.colorType) {
      case "primary":
        return props.theme.colors.primary;
      case "secondary":
        return props.theme.colors.secondary;
      case "alert":
        return props.theme.colors.alert;
      default:
        throw new Error(
          "colorType value is invalid. Valid options: primary, secondary or alert"
        );
    }
  }};
  color: #fff;
  width: ${(props) => props.buttonWidth || "100px"};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
