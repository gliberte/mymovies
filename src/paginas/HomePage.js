import React from "react";
import Destaque from "../componentes/Destaque";
import Estrenos from "../componentes/Estrenos";
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'

import TituloSeccion from '../componentes/TituloSeccion'

import {getEstrenos,getProximosEstrenos} from '../redux/actions/moviesActions'



class HomePage extends React.Component {
    state = {
        proximos_estrenos:[]
    }
    componentDidMount() {
        this.props.getEstrenos()
        this.props.getProximosEstrenos()
       
    }
   
   
  render() {
    return (
      <div>
        <Destaque pelicula={this.props.estrenos.peliculaDestacada} />
        <TituloSeccion>Estrenos:</TituloSeccion>
        <Estrenos data={this.props.estrenos.data} />
        <TituloSeccion>Próximamente:</TituloSeccion>
        <Estrenos data={this.props.proximos_estrenos.data}></Estrenos>
        
      </div>
    );
  }
}

function mapStateToProps({test,estrenos,proximos_estrenos}) {
    return {
        test,estrenos,proximos_estrenos
    }
}
export default connect(mapStateToProps,{
    getEstrenos,
    getProximosEstrenos
})(HomePage)