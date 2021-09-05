import React, { useState } from "react";

import { ListContainer } from "./style";

const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState([]);

  const renderCards = () => [];

  return <ListContainer>{renderCards()}</ListContainer>;
};

export default RestaurantList;
