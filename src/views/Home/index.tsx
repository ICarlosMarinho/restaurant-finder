import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { HomeContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import LoadingAnimation from "../../components/LoadingAnimation";
import { setLocation } from "../../redux/modules/places";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        lat: position.coords.latitude || 0,
        lng: position.coords.longitude || 0,
      };
      dispatch(setLocation(location));
    });
  }, []);

  return (
    <HomeContainer>
      <Sidebar />
      <Map />
      <LoadingAnimation />
    </HomeContainer>
  );
};

export default Home;
