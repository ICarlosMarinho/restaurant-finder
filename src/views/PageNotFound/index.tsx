import React, { useEffect } from "react";

import Title from "../../components/Title";
import Button from "../../components/Button";

const PageNotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Oops!";
  }, []);

  return (
    <>
      <Title>PageNotFound is working!</Title>
      <Button buttonType="primary">Back To Home</Button>
    </>
  );
};

export default PageNotFound;
