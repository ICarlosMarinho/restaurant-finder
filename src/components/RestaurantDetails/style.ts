import styled from "styled-components";
import Slider from "react-slick";
import Button from "../Button";

export const StyledSlider = styled(Slider)`
  width: 90%;
`;

export const DetailsContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  max-width: 70%;
  position: relative;
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

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const CarouselImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const WeekdayList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 5px;
`;

export const WeekdayItem = styled.li`
  padding: 1px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-weight: bold;
  font-size: 0.9em;
  text-align: center;
`;
