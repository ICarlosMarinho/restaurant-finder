import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Lupa from "../../../assets/lupa.svg";
import { setLoading, setRestaurants } from "../../redux/modules/restaurants";
import { RootState } from "../../redux/store";
import { getRestaurantsFromApi } from "../../services/places";

import {
  SearchBarProps,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./style";

const SearchBar: React.FC<SearchBarProps> = ({
  containerWidth,
  containerHeight,
}) => {
  const [searchStr, setSearchStr] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const { map, location, radius } = useSelector(
    (state: RootState) => state.places
  );
  const dispatch = useDispatch();

  const handleClick = (evt: React.MouseEvent) => {
    evt.preventDefault();

    dispatch(setLoading(true));
    getRestaurantsFromApi(
      map,
      location,
      radius,
      (restaurants) => {
        dispatch(setRestaurants(restaurants));
        dispatch(setLoading(false));
      },
      () => {
        dispatch(setLoading(false));
      },
      searchStr
    );
  };

  return (
    <SearchContainer
      inputActive={inputActive}
      containerWidth={containerWidth}
      containerHeight={containerHeight}>
      <SearchInput
        type="search"
        max="100"
        value={searchStr}
        onChange={(evt) => setSearchStr(evt.target.value)}
        onFocus={() => setInputActive(true)}
        onBlur={() => setInputActive(false)}
        placeholder="Buscar restaurante"
        required
      />
      <SearchButton
        inputActive={inputActive}
        type="submit"
        onClick={handleClick}>
        <img src={Lupa} width="80%" height="80%" />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
