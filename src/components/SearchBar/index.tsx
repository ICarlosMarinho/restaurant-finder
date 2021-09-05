import React, { useState } from "react";

import Lupa from "../../../assets/lupa.svg";

import {
  SearchBarProps,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./style";

interface ExtendendProps extends SearchBarProps {
  searchCallback: Function;
}

const SearchBar: React.FC<ExtendendProps> = ({
  containerWidth,
  containerHeight,
  searchCallback,
}) => {
  const [searchStr, setSearchStr] = useState("");

  const handleClick = (evt: React.MouseEvent) => {
    searchCallback(evt, searchStr);
  };

  return (
    <SearchContainer
      containerWidth={containerWidth}
      containerHeight={containerHeight}>
      <SearchInput
        type="search"
        max="100"
        value={searchStr}
        onChange={(evt) => setSearchStr(evt.target.value)}
        required
      />
      <SearchButton type="button" onClick={handleClick}>
        <img src={Lupa} width="80%" height="80%" />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
