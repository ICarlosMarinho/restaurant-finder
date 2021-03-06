export interface RestaurantState {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  loading: boolean;
  detailsOpen: boolean;
}

export interface RestaurantAction {
  type: string;
  payload: Restaurant | Restaurant[] | boolean;
}

const initialState: RestaurantState = {
  restaurants: new Array<Restaurant>(),
  selectedRestaurant: null,
  loading: false,
  detailsOpen: false,
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

    case types.SET_LOADING:
      return { ...state, loading: action.payload as boolean };

    case types.SET_DETAILS_OPEN:
      return { ...state, detailsOpen: action.payload as boolean };
    default:
      return state;
  }
};

export const types = {
  SET_RESTAURANTS: "restaurants/SET_RESTAURANTS",
  SET_RESTAURANT: "restaurants/SET_RESTAURANT",
  SET_LOADING: "restaurants/SET_LOADING",
  SET_DETAILS_OPEN: "restaurants/SET_DETAILS_OPEN",
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

export const setLoading = (loading: boolean): RestaurantAction => {
  return {
    type: types.SET_LOADING,
    payload: loading,
  };
};

export const setDetaisOpen = (detailsOpen: boolean): RestaurantAction => {
  return {
    type: types.SET_DETAILS_OPEN,
    payload: detailsOpen,
  };
};

export default reducer;
