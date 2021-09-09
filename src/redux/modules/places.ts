import Coordinates from "../../interfaces/Coordinates";

export interface PlacesState {
  map: any;
  location: Coordinates;
  radius: number;
  zoom: number;
}

export interface PlacesAction {
  type: string;
  payload: any;
}

export const types = {
  SET_MAP: "places/SET_MAP",
  SET_LOCATION: "places/SET_LOCATION",
  SET_RADIUS: "places/SET_RADIUS",
  SET_ZOOM: "places/SET_ZOOM",
};

export const setMap = (map: any): PlacesAction => {
  return {
    type: types.SET_MAP,
    payload: map,
  };
};

export const setLocation = (location: Coordinates): PlacesAction => {
  return {
    type: types.SET_LOCATION,
    payload: location,
  };
};

export const setRadius = (radius: number): PlacesAction => {
  return {
    type: types.SET_RADIUS,
    payload: radius,
  };
};

export const setZoom = (zoom: number): PlacesAction => {
  return {
    type: types.SET_ZOOM,
    payload: zoom,
  };
};

const initialState = {
  map: null,
  location: { lat: 0, lng: 0 },
  radius: 5000,
  zoom: 16,
};

const reducer = (
  state: PlacesState = initialState,
  action: PlacesAction
): PlacesState => {
  switch (action.type) {
    case types.SET_MAP:
      return { ...state, map: action.payload };

    case types.SET_LOCATION:
      return { ...state, location: action.payload };

    case types.SET_RADIUS:
      return { ...state, radius: action.payload };

    case types.SET_ZOOM:
      return { ...state, zoom: action.payload };

    default:
      return state;
  }
};

export default reducer;
