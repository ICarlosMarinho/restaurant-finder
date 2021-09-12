import React from "react";
import { Link } from "react-router-dom";

import { SidebarContainer, LogoImg } from "./style";
import Logo from "../../../assets/restaurant-finder-logo.png";
import RestaurantList from "../RestaurantList";
import SearchBar from "../SearchBar";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Link to="/">
        <LogoImg src={Logo} alt="Ir para a Home" />
      </Link>
      <SearchBar containerWidth="calc(100% - 20px)" />
      <RestaurantList />
    </SidebarContainer>
  );
};

export default Sidebar;
