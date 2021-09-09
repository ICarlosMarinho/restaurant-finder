import React, { useEffect, useState } from "react";

import { HomeContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import Coordinates from "../../interfaces/Coordinates";
import Modal from "../../components/Modal";
import LoadingAnimation from "../../components/LoadingAnimation";

const Home: React.FC = () => {
  const [coords, setCoords] = useState<Coordinates>({ lat: 0, lng: 0 });
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude || 0,
        lng: position.coords.longitude || 0,
      });
    });
  }, []);

  return (
    <HomeContainer>
      <Sidebar />
      <Map center={coords} zoom={16} />
      <LoadingAnimation />
    </HomeContainer>
  );
};

export default Home;
