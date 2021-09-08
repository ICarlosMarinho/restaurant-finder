import Restaurant from "../../interfaces/Restaurant";

export interface RestaurantState {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
}

export interface RestaurantAction {
  type: string;
  payload: Restaurant | Restaurant[];
}

const initialState: RestaurantState = {
  restaurants: new Array<Restaurant>(),
  selectedRestaurant: null,
};

const reducer = (
  state = initialState,
  action: RestaurantAction
): RestaurantState => {
  switch (action.type) {
    case types.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload as Restaurant[] };

    case types.SET_RESTAURANT:
      return { ...state, selectedRestaurant: action.payload as Restaurant };
    default:
      return state;
  }
};

export const types = {
  SET_RESTAURANTS: "restaurants/SET_RESTAURANTS",
  SET_RESTAURANT: "restaurants/SET_RESTAURANT",
};

export const setRestaurants = (restaurants: Restaurant[]): RestaurantAction => {
  return {
    type: types.SET_RESTAURANTS,
    payload: restaurants,
  };
};

export const setRestaurant = (restaurant: Restaurant): RestaurantAction => {
  return {
    type: types.SET_RESTAURANT,
    payload: restaurant,
  };
};

export default reducer;
