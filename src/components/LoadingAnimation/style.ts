import styled, { keyframes } from "styled-components";

interface CircleProps {
  animationDelay?: string;
}

const grow = keyframes`

  50% {
    transform: translateY(-80px);
    fill: #FEA443 
  }
  100% {
    transform: translateY(0px);
  }

`;

export const Circle = styled.circle<CircleProps>`
  animation-name: ${grow};
  animation-timing-function: bezier(0.3, 0.2, 0.8, 0.9);
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
  fill: ${(props) => props.theme.colors.primary};
  animation-delay: ${(props) => props.animationDelay};
`;
