import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.title};
  color: #fff;
  width: 120px;
  cursor: pointer;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.primary};
`;

const SecondaryButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.secondary};
`;

const AlertButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.alert};
`;

export { PrimaryButton, SecondaryButton, AlertButton };
