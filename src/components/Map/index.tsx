import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoadScript } from "@react-google-maps/api";
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";

import { MapContainer } from "./style";
import { getRestaurantsFromApi } from "../../services/places";
import { setRestaurants } from "../../redux/modules/restaurants";
import Coordinates from "../../interfaces/Coordinates";
import Restaurant from "../../interfaces/Restaurant";

interface MapProps {
  center: Coordinates | null;
  zoom: number;
}

const libraries: Libraries = ["places"];

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const [map, setMap] = useState<{
    setCenter: (center: Coordinates) => void;
  } | null>(null);
  const [location, setLocation] = useState(null);
  const [radius, setRadius] = useState(5000);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY as string,
    libraries,
  });

  useEffect(() => {
    if (isLoaded && center) {
      renderMap();
      getUserLocation();
    }

    if (loadError) console.log(loadError);
  }, [isLoaded]);

  useEffect(() => {
    if (location && map) {
      getRestaurantsFromApi(
        map,
        location,
        radius,
        (restaurants: Restaurant[]) => {
          placeMarkers(restaurants);
          storeRestaurants(restaurants);
        },
        console.log
      );
    }
  }, [location]);

  const getUserLocation = () => {
    setLocation(new google.maps.LatLng(center?.lat, center?.lng));
  };

  const renderMap = () => {
    setMap(new google.maps.Map(containerRef.current, { center, zoom }));
  };

  const storeRestaurants = (restaurants: Restaurant[]) => {
    dispatch(setRestaurants(restaurants));
  };

  const placeMarkers = (restaurants: Restaurant[]) => {
    restaurants.map(
      (restaurant: Restaurant) =>
        new google.maps.Marker({
          position: restaurant.location,
          map,
        })
    );

    map?.setCenter(restaurants[0].location);
  };

  return <MapContainer ref={containerRef} id="map-container"></MapContainer>;
};

export default Map;
