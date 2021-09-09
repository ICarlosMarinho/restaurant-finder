import Coordinates from "./Coordinates";

interface Restaurant {
  id: string;
  name: string;
  address: string;
  imgUrls: string[];
  phone: string;
  website: string;
  open: string;
  weekday: string[];
  location: Coordinates;
  rating: number;
}

export default Restaurant;
