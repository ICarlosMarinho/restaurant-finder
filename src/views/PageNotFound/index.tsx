import React, { useEffect } from "react";

import Title from "../../components/Title";

const PageNotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Oops!";
  }, []);

  return <Title>PageNotFound is working!</Title>;
};

export default PageNotFound;
