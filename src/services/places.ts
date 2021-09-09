import Coordinates from "../interfaces/Coordinates";
import Restaurant from "../interfaces/Restaurant";
import { getFormatedRestaurant } from "../utils";

export const getRestaurantsFromApi = (
  map: any,
  location: Coordinates | null,
  radius: number,
  success: (resaurants: Restaurant[]) => void,
  error: (status: any) => void
): void => {
  const service = new google.maps.places.PlacesService(map);
  const request = {
    location,
    radius,
    type: ["restaurant"],
  };

  service.textSearch(request, (results: [], status: string) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const formattedRestaurants = results.map((restaurant) =>
        getFormatedRestaurant(restaurant)
      );

      success(formattedRestaurants);
    } else {
      error(status);
    }
  });
};

export const getRestaurantDetailsFromApi = (
  map: any,
  id: string,
  success: (restaurant: Restaurant) => void,
  error: (status: any) => void
) => {
  const service = new google.maps.places.PlacesService(map);
  const request = {
    placeId: id,
    fields: [
      "name",
      "rating",
      "geometry",
      "formatted_phone_number",
      "photo",
      "icon",
      "geometry",
      "formatted_address",
      "website",
      "opening_hours",
    ],
  };

  service.getDetails(request, (result: any, status: string) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const formattedRestaurant = getFormatedRestaurant(result);

      success(formattedRestaurant);
    } else {
      error(status);
    }
  });
};
