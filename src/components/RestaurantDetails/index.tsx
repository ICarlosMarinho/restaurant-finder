import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { setDetaisOpen } from "../../redux/modules/restaurants";
import { RootState } from "../../redux/store";
import Button from "../Button";
import Modal from "../Modal";

import {
  DetailsContainer,
  Title,
  Info,
  Link,
  CarouselImg,
  StyledSlider,
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    initialSlide: 0,
    pauseOnHover: true,
  };

  const closeModal = () => dispatch(setDetaisOpen(false));

  const renderCarousel = () => {
    return selectedRestaurant.imgUrls ? (
      <StyledSlider {...sliderSettings}>
        {selectedRestaurant.imgUrls.map((imgUrl: string) => (
          <div>
            <CarouselImg key={imgUrl} src={imgUrl} />
          </div>
        ))}
      </StyledSlider>
    ) : null;
  };

  return (
    <Modal modalOpen={detailsOpen}>
      <DetailsContainer>
        <Title>{selectedRestaurant?.name}</Title>
        <Info>{selectedRestaurant?.phone}</Info>
        <Link href={selectedRestaurant?.website} rel="noreferrer noopener">
          Site
        </Link>
        {renderCarousel()}
        <Button colorType="primary" onClick={closeModal}>
          Fechar
        </Button>
      </DetailsContainer>
    </Modal>
  );
};

export default RestaurantDetails;
