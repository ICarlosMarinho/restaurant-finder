import Coordinates from "../interfaces/Coordinates";
import Restaurant from "../interfaces/Restaurant";
import { getFormatedRestaurant } from "../utils";

declare const google: any;

export const getRestaurantsFromApi = (
  map: any,
  location: Coordinates | null,
  radius: number,
  success: (resaurant: Restaurant[]) => void,
  error: (status: any) => void
): void => {
  const service = new google.maps.places.PlacesService(map);
  const request = { location, radius, type: ["restaurant"] };

  service.textSearch(request, (results: [], status: any) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const formattedRestaurants: Restaurant[] = results.map((restaurant) =>
        getFormatedRestaurant(restaurant)
      );

      success(formattedRestaurants);
    } else {
      error(status);
    }
  });
};
