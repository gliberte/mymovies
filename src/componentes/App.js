import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components'

import HomePage from "../paginas/HomePage";
import PeliculaDetalle from "../paginas/PeliculaDetalle";
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'

const Container = styled.div`
  
`

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={HomePage} />
          <Route path="/detalles/:peliculaid" component={PeliculaDetalle} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
