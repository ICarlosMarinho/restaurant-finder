import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RestaurantCard from "../RestaurantCard";

import { ListContainer } from "./style";

const RestaurantList: React.FC = () => {
  const { restaurants } = useSelector((state: RootState) => state.restaurants);

  const renderCards = (restaurants: Restaurant[]) =>
    restaurants.map((restaurant: Restaurant) => (
      <RestaurantCard
        id={restaurant.id}
        key={restaurant.id}
        address={restaurant.address}
        name={restaurant.name}
        rating={restaurant.rating}
        imgUrl={restaurant.imgUrls[0]}
      />
    ));

  return <ListContainer>{renderCards(restaurants)}</ListContainer>;
};

export default RestaurantList;
