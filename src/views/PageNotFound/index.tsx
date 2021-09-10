import React from "react";

import { BackToHomeButton, PageNotFoundContainer, Title } from "./style";

const PageNotFound: React.FC = () => {
  return (
    <PageNotFoundContainer>
      <Title>Ops! página não encontrada.</Title>
      <BackToHomeButton to="/">Ir para home</BackToHomeButton>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
