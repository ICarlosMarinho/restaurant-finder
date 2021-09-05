import React from "react";
import { Link } from "react-router-dom";

import { SidebarContainer } from "./style";
import Logo from "../../../assets/restaurant-finder-logo.svg";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Link to="/">
        <img src={Logo} alt="Ir para a Home" width="90%" height="auto" />
      </Link>
    </SidebarContainer>
  );
};
