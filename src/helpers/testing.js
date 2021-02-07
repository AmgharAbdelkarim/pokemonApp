import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "store";
import { Router as Switch } from "react-router-dom";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const Wrapper = (props) => {
  return (
    <Provider store={store()}>
      <Switch history={history}>{props.children}</Switch>
    </Provider>
  );
};

export const renderWithRedux = (ui, renderOptions = {}) => {
  return {
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
    store,
  };
};
