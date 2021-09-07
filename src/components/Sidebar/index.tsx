import React from "react";
import { Link } from "react-router-dom";

import { SidebarContainer } from "./style";
import Logo from "../../../assets/restaurant-finder-logo.svg";
import RestaurantList from "../RestaurantList";
import SearchBar from "../SearchBar";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Link to="/">
        <img src={Logo} alt="Ir para a Home" width="auto" height="100px" />
      </Link>
      <SearchBar searchCallback={() => {}} />
      <RestaurantList />
    </SidebarContainer>
  );
};

export default Sidebar;
