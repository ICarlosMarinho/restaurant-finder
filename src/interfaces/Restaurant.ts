import Coordinates from "./Coordinates";

interface Restaurant {
  id: string;
  address: string;
  location: Coordinates;
  name: string;
  rating: number;
  imgUrl: string;
}

export default Restaurant;
