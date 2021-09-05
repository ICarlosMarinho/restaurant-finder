import React from "react";
import SearchBar from "../../components/SearchBar";

import Title from "../../components/Title";

const Home: React.FC = () => {
  return (
    <>
      <Title>Home is working!</Title>
      <SearchBar searchCallback={console.log} />
    </>
  );
};

export default Home;
