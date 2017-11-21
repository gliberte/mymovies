import React from "react";
import axios from "axios";
import {connect} from 'react-redux'

import Destaque from "../componentes/Destaque";
import Cast from "../componentes/Cast";
import Header from '../componentes/Header'

import {getCreditos,getPeliculaDetalles} from '../redux/actions/moviesActions'


class PeliculaDetalle extends React.Component {
  state = {
    pelicula: ""
  };

  componentDidMount() {
    const { peliculaid } = this.props.match.params;
    this.props.getCreditos(peliculaid)
    this.props.getPeliculaDetalles(peliculaid)
  }
  
  render() {
    return (
      <div>
        <Header fecha={this.props.test.fecha}/>
        <Destaque pelicula={this.props.pelicula_detalles.data} />
        <Cast cast={this.props.creditos.data} />
      </div>
    );
  }
}
function mapStateToProps({test,creditos,pelicula_detalles}) {
  return{test,creditos,pelicula_detalles}
}

export default connect(mapStateToProps,{
  getCreditos,getPeliculaDetalles
})(PeliculaDetalle)