import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoadScript } from "@react-google-maps/api";
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";

import { MapContainer } from "./style";
import { getRestaurantsFromApi } from "../../services/places";
import { setLoading, setRestaurants } from "../../redux/modules/restaurants";
import Restaurant from "../../interfaces/Restaurant";
import { RootState } from "../../redux/store";
import { setMap } from "../../redux/modules/places";

const libraries: Libraries = ["places"];

const Map: React.FC = () => {
  const containerRef = useRef(null);
  const [center, setCenter] = useState(null);
  const dispatch = useDispatch();
  const { location, zoom, radius, map } = useSelector(
    (state: RootState) => state.places
  );
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY as string,
    libraries,
  });

  useEffect(() => {
    dispatch(setLoading(true));

    if (isLoaded && location.lat && location.lng) {
      getUserLocation();
      renderMap();
    }

    if (loadError) console.log(loadError);
  }, [isLoaded, location]);

  useEffect(() => {
    if (map && center) {
      getRestaurantsFromApi(
        map,
        center,
        radius,
        (restaurants: Restaurant[]) => {
          placeMarkers(restaurants);
          storeRestaurants(restaurants);
          dispatch(setLoading(false));
        },
        () => {
          dispatch(setLoading(false));
        }
      );
    }
  }, [map, center]);

  const getUserLocation = () => {
    setCenter(new google.maps.LatLng(location.lat, location.lng));
  };

  const renderMap = () => {
    const map = new google.maps.Map(containerRef.current, { center, zoom });

    dispatch(setMap(map));
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

    map.setCenter(center);
  };

  return <MapContainer ref={containerRef} id="map-container"></MapContainer>;
};

export default Map;
