declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare const google: any;

declare interface Coordinates {
  lat: number;
  lng: number;
}

declare interface Restaurant {
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
