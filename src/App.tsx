import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import PageNotFound from "./views/PageNotFound";
import theme from "./theme";
import ResetStyle from "./ResetStyle";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
