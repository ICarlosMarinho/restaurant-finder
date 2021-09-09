import { combineReducers } from "redux";

import restaurants from "../modules/restaurants";
import places from "../modules/places";

export default combineReducers({
  restaurants,
  places,
});
