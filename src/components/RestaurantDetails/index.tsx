import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { setDetaisOpen } from "../../redux/modules/restaurants";
import { RootState } from "../../redux/store";
import Modal from "../Modal";
import CloseIcon from "../../../assets/close-icon.svg";

import {
  DetailsContainer,
  Title,
  Info,
  Link,
  CarouselImg,
  StyledSlider,
  CloseButton,
  WeekdayItem,
  WeekdayList,
} from "./style";

const RestaurantDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedRestaurant, detailsOpen } = useSelector(
    (state: RootState) => state.restaurants
  );
  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:
      selectedRestaurant.imgUrls?.length - 1 > 5
        ? 5
        : selectedRestaurant.imgUrls?.length - 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    initialSlide: 0,
    pauseOnHover: true,
    variableWidth: false,
  };

  const closeModal = () => dispatch(setDetaisOpen(false));

  const renderCarousel = () => {
    return selectedRestaurant.imgUrls ? (
      <StyledSlider {...sliderSettings}>
        {selectedRestaurant.imgUrls.map((imgUrl: string) => (
          <div key={imgUrl}>
            <CarouselImg src={imgUrl} />
          </div>
        ))}
      </StyledSlider>
    ) : null;
  };

  const renderWeekdayList = () =>
    selectedRestaurant.weekday ? (
      <WeekdayList>
        {selectedRestaurant.weekday.map((day: string, index: number) => (
          <WeekdayItem key={index}>{day}</WeekdayItem>
        ))}
      </WeekdayList>
    ) : null;

  const renderWebsiteUrl = () =>
    selectedRestaurant.website ? (
      <Link
        href={selectedRestaurant?.website}
        rel="noreferrer noopener"
        target="_blank">
        Ir para o website
      </Link>
    ) : null;

  return (
    <Modal modalOpen={detailsOpen}>
      <DetailsContainer>
        <CloseButton
          colorType="primary"
          onClick={closeModal}
          buttonWidth="40px">
          <img src={CloseIcon} alt="Fechar modal" width="60%" height="60%" />
        </CloseButton>
        <Title>{selectedRestaurant?.name}</Title>
        <Info>{selectedRestaurant?.phone}</Info>
        {renderWebsiteUrl()}
        {renderWeekdayList()}
        {renderCarousel()}
      </DetailsContainer>
    </Modal>
  );
};

export default RestaurantDetails;
