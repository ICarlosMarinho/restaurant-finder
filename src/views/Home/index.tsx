import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoadScript } from "@react-google-maps/api";
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";

import { HomeContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import LoadingAnimation from "../../components/LoadingAnimation";
import { setLocation } from "../../redux/modules/places";
import RestaurantDetails from "../../components/RestaurantDetails";
import { RootState } from "../../redux/store";
import { setLoading, setRestaurants } from "../../redux/modules/restaurants";
import { getRestaurantsFromApi } from "../../services/places";

const libraries: Libraries = ["places"];

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedRestaurant } = useSelector(
    (state: RootState) => state.restaurants
  );
  const { location, radius, map } = useSelector(
    (state: RootState) => state.places
  );
  const [center, setCenter] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY as string,
    libraries,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        dispatch(setLocation(location));
      },
      () => {
        const location = {
          lat: 40.6971494,
          lng: -74.2598655,
        };

        dispatch(setLocation(location));
      }
    );
  }, []);

  useEffect(() => {
    if (isLoaded) setCenter(new google.maps.LatLng(location.lat, location.lng));

    if (loadError) console.log(loadError);
  }, [isLoaded, location]);

  useEffect(() => {
    dispatch(setLoading(true));

    if (map && center) {
      getRestaurantsFromApi(
        map,
        center,
        radius,
        (restaurants: Restaurant[]) => {
          dispatch(setRestaurants(restaurants));
          dispatch(setLoading(false));
        },
        () => {
          dispatch(setLoading(false));
        }
      );
    }
  }, [center]);

  const renderRestaurantDetails = () =>
    selectedRestaurant ? <RestaurantDetails /> : null;

  return (
    <HomeContainer>
      <Sidebar />
      <Map center={center} isLoaded={isLoaded} />
      {renderRestaurantDetails()}
      <LoadingAnimation />
    </HomeContainer>
  );
};

export default Home;
