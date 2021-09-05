import React from "react";
import { Link } from "react-router-dom";

import { SidebarContainer } from "./style";
import Logo from "../../../assets/restaurant-finder-logo.svg";
import RestaurantList from "../RestaurantList";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Link to="/">
        <img src={Logo} alt="Ir para a Home" width="auto" height="100px" />
        <RestaurantList />
      </Link>
    </SidebarContainer>
  );
};

export default Sidebar;
