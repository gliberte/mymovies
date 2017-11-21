import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components'
import {connect} from 'react-redux'
import HomePage from "../paginas/HomePage";
import PeliculaDetalle from "../paginas/PeliculaDetalle";
import Footer from '../componentes/Footer'


import {updateFecha} from '../redux/actions/testActions'



class App extends React.Component {
  componentDidMount(){
    
    setInterval(this.props.updateFecha,1000)
    
  }
  
  
  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Route exact path="/" component={HomePage} />
          <Route path="/detalles/:peliculaid" component={PeliculaDetalle} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps({test}) {
  return{test}
}
export default connect(mapStateToProps,{
  updateFecha
})(App);
