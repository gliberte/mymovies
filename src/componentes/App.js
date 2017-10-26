import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomePage from "../paginas/HomePage";
import PeliculaDetalle from "../paginas/PeliculaDetalle";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/detalles" component={PeliculaDetalle} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
