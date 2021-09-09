import styled from "styled-components";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  width: 90%;
`;

export const DetailsContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  max-width: 70%;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.darkerGray};
  font-family: ${(props) => props.theme.fonts.title};
`;

export const Info = styled.p`
  color: ${(props) => props.theme.colors.lighterGray};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.lighterGray};
  font-family: ${(props) => props.theme.fonts.regular};
  text-decoration: none;
`;

export const CarouselImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
