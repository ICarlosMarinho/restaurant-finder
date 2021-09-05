import React from "react";

import { HomeContainer } from "./style";
import Sidebar from "../../components/Sidebar";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Sidebar />
    </HomeContainer>
  );
};

export default Home;
