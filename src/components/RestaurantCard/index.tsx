import React from "react";

import {
  CardContainer,
  CardInfoContainer,
  CardTitle,
  CardText,
  CardImg,
} from "./style";

interface ComponentProps {
  id: string;
  address: string;
  name: string;
  rating: number;
  imgUrl: string;
}

const RestaurantCard: React.FC<ComponentProps> = ({
  id,
  address,
  name,
  rating,
  imgUrl,
}) => {
  const selectRestaurant = (evt: React.MouseEvent<HTMLDivElement>) => {
    console.log(id);
  };

  return (
    <CardContainer onClick={selectRestaurant}>
      <CardInfoContainer>
        <CardTitle>{name}</CardTitle>
        <CardText>{address}</CardText>
      </CardInfoContainer>
      <CardImg src={imgUrl} alt={`Restaurante ${name}`} />
    </CardContainer>
  );
};

export default RestaurantCard;
