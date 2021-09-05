import React from "react";
import RestaurantCard from "../../components/RestaurantCard";
import SearchBar from "../../components/SearchBar";

import Title from "../../components/Title";

const Home: React.FC = () => {
  return (
    <>
      <Title>Home is working!</Title>
      <SearchBar searchCallback={console.log} />
      <RestaurantCard />
    </>
  );
};

export default Home;
