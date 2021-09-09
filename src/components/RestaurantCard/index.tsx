import React from "react";

import {
  CardContainer,
  CardInfoContainer,
  CardTitle,
  CardText,
  CardImg,
} from "./style";

const RestaurantCard: React.FC<{
  address: string;
  name: string;
  rating: number;
  imgUrl: string;
}> = ({ address, name, rating, imgUrl }) => {
  return (
    <CardContainer>
      <CardInfoContainer>
        <CardTitle>{name}</CardTitle>
        <CardText>{address}</CardText>
      </CardInfoContainer>
      <CardImg src={imgUrl} alt={`Restaurante ${name}`} />
    </CardContainer>
  );
};

export default RestaurantCard;
