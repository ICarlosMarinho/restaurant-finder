import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import PageNotFound from "./views/PageNotFound";
import theme from "./theme";
import ResetStyle from "./ResetStyle";
import store from "./redux/store";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <ErrorBoundary>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
