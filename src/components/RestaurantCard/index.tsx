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
}> = ({ address, name, rating }) => {
  return (
    <CardContainer>
      <CardInfoContainer>
        <CardTitle>{name}</CardTitle>
        <CardText>{address}</CardText>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default RestaurantCard;
