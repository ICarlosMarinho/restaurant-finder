import React from "react";

import {
  CardContainer,
  CardInfoContainer,
  CardTitle,
  CardText,
  CardImg,
} from "./style";

const RestaurantCard: React.FC = () => {
  return (
    <CardContainer>
      <CardInfoContainer>
        <CardTitle>Hello Title</CardTitle>
        <CardText>Hello card text!</CardText>
      </CardInfoContainer>
      <CardImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/1200px-Tom%27s_Restaurant%2C_NYC.jpg" />
    </CardContainer>
  );
};

export default RestaurantCard;
