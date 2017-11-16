import React from "react";
import ReactDOM from "react-dom";
import App from "./componentes/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger'

import reducers from './redux/reducers'

import { injectGlobal } from "styled-components";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Anton|Cinzel|Rock+Salt');

  body {
    margin: 0;
  }
`;


const store = createStore(reducers,{},applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
