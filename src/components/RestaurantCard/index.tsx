import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../../redux/modules/restaurants";
import { RootState } from "../../redux/store";
import { getRestaurantDetailsFromApi } from "../../services/places";

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
  const { map } = useSelector((state: RootState) => state.places);
  const dispatch = useDispatch();

  const selectRestaurant = (evt: React.MouseEvent<HTMLDivElement>) => {
    getRestaurantDetailsFromApi(
      map,
      id,
      (restaurant) => {
        dispatch(setRestaurant(restaurant));
      },
      console.log
    );
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
