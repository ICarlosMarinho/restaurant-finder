import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import LoadingAnimation from "../../components/LoadingAnimation";
import { setLocation } from "../../redux/modules/places";
import RestaurantDetails from "../../components/RestaurantDetails";
import { RootState } from "../../redux/store";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedRestaurant } = useSelector(
    (state: RootState) => state.restaurants
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        lat: position.coords.latitude || 0,
        lng: position.coords.longitude || 0,
      };
      dispatch(setLocation(location));
    });
  }, []);

  const renderRestaurantDetails = () =>
    selectedRestaurant ? <RestaurantDetails /> : null;

  return (
    <HomeContainer>
      <Sidebar />
      <Map />
      {renderRestaurantDetails()}
      <LoadingAnimation />
    </HomeContainer>
  );
};

export default Home;
