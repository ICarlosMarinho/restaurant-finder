import React, { useState } from "react";
import { useSelector } from "react-redux";
import Restaurant from "../../interfaces/Restaurant";
import RestaurantCard from "../RestaurantCard";

import { ListContainer } from "./style";

const RestaurantList: React.FC = () => {
  const { restaurants } = useSelector((state: any) => state?.restaurants);

  const renderCards = () =>
    restaurants.map((restaurant: Restaurant) => (
      <RestaurantCard
        key={restaurant.id}
        address={restaurant.address}
        name={restaurant.name}
        rating={restaurant.rating}
      />
    ));

  return <ListContainer>{renderCards()}</ListContainer>;
};

export default RestaurantList;
