import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import Modal from "../Modal";
import { Circle } from "./style";

const LoadingAnimation: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.restaurants);

  return (
    <Modal modalOpen={loading}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="125"
        height="110"
        viewBox="0 0 125 110">
        <Circle cx="10" cy="100" r="10" />
        <Circle animationDelay="0.3s" cx="45" cy="100" r="10" />
        <Circle animationDelay="0.6s" cx="80" cy="100" r="10" />
        <Circle animationDelay="0.9s" cx="115" cy="100" r="10" />
      </svg>
    </Modal>
  );
};

export default LoadingAnimation;
