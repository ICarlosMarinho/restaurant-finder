import React, { useEffect, useState } from "react";

import { HomeContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import Coordinates from "../../interfaces/Coordinates";

const Home: React.FC = () => {
  const [coords, setCoords] = useState<Coordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <HomeContainer>
      <Sidebar />
      <Map center={coords} zoom={16} />
    </HomeContainer>
  );
};

export default Home;
