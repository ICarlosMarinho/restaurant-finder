import { PayloadAction } from "@reduxjs/toolkit";

import Restaurant from "../../interfaces/Restaurant";

interface RestaurantState {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
}

const initialState: RestaurantState = {
  restaurants: [],
  selectedRestaurant: null,
};

const reducer = (
  state = initialState,
  action: PayloadAction<Restaurant[] | Restaurant>
) => {
  switch (action.type) {
    case types.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };

    case types.SET_RESTAURANT:
      return { ...state, selectedRestaurant: action.payload };
    default:
      return state;
  }
};

export const types = {
  SET_RESTAURANTS: "restaurants/SET_RESTAURANTS",
  SET_RESTAURANT: "restaurants/SET_RESTAURANT",
};

export const setRestaurants = (restaurants: Restaurant[]) => {
  return {
    type: types.SET_RESTAURANTS,
    payload: restaurants,
  };
};

export const setRestaurant = (restaurant: Restaurant) => {
  return {
    type: types.SET_RESTAURANT,
    payload: restaurant,
  };
};

export default reducer;
