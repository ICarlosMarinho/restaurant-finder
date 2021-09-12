import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MapContainer } from "./style";
import { RootState } from "../../redux/store";
import { setMap } from "../../redux/modules/places";

interface ComponentProps {
  center: any;
  isLoaded: boolean;
}

const Map: React.FC<ComponentProps> = ({ isLoaded, center }) => {
  const containerRef = useRef(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state: RootState) => state.restaurants);
  const { zoom, map } = useSelector((state: RootState) => state.places);

  useEffect(() => {
    if (isLoaded) renderMap();
  }, [isLoaded]);

  useEffect(() => {
    if (center) placeMarkers(restaurants);
  }, [restaurants, center]);

  const renderMap = () => {
    const map = new google.maps.Map(containerRef.current, { center, zoom });

    dispatch(setMap(map));
  };

  const removeMarkers = () => {
    if (markers.length) {
      for (let i = 0; i < markers.length; i++) markers[i].setMap(null);
    }

    setMarkers([]);
  };

  const placeMarkers = (restaurants: Restaurant[]) => {
    removeMarkers();

    const newMarkers = restaurants.map(
      (restaurant: Restaurant) =>
        new google.maps.Marker({
          position: restaurant.location,
          map,
        })
    );

    setMarkers(newMarkers);

    map.setCenter(center);
  };

  return <MapContainer ref={containerRef} id="map-container"></MapContainer>;
};

export default Map;
