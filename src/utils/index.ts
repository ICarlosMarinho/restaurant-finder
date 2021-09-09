import Coordinates from "../interfaces/Coordinates";
import Restaurant from "../interfaces/Restaurant";

export const getFormatedRestaurant = (restaurant: any) => {
  const formattedLocation: Coordinates = {
    lat: restaurant.geometry.location.lat(),
    lng: restaurant.geometry.location.lng(),
  };

  const formattedRestaurant: Restaurant = {
    id: restaurant.place_id ?? null,
    name: restaurant.name,
    imgUrls:
      restaurant.photos?.map((photo: any) => photo.getUrl()) ?? restaurant.icon,
    phone: restaurant.formatted_phone_number ?? null,
    website: restaurant.website ?? null,
    open: restaurant.opening_hours?.isOpen() ?? null,
    weekday: restaurant.opening_hours?.weekday_text ?? null,
    address: restaurant.formatted_address,
    location: formattedLocation,
    rating: restaurant.rating,
  };

  return formattedRestaurant;
};
