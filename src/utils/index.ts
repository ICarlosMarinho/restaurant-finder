import Coordinates from "../interfaces/Coordinates";
import Restaurant from "../interfaces/Restaurant";

export const getFormatedRestaurant = (restaurant: any) => {
  const formattedLocation: Coordinates = {
    lat: restaurant.geometry.location.lat(),
    lng: restaurant.geometry.location.lng(),
  };

  const formattedRestaurant: Restaurant = {
    id: restaurant.place_id,
    address: restaurant.formatted_address,
    location: formattedLocation,
    name: restaurant.name,
    rating: restaurant.rating,
    imgUrl: restaurant.photos[0]?.getUrl() || "",
  };

  return formattedRestaurant;
};
