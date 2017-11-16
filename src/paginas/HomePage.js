import React from "react";
import Destaque from "../componentes/Destaque";
import Estrenos from "../componentes/Estrenos";
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'

import TituloSeccion from '../componentes/TituloSeccion'


class HomePage extends React.Component {
    state = {
        estrenos:[],
        peliculaDestacada:"",
        proximos_estrenos:[]
    }
    componentDidMount() {
        this.getPopularMovies()
        this.getProximosEstrenos()
        console.log(this.props.test.test)
    }
    getProximosEstrenos = async ()=>{
        try {
            const result = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d132c8b7351c4c050ee5023941590be8')
            this.setState({
                proximos_estrenos:result.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    getPopularMovies = async ()=>{
        try {
            const result = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5f27999c516bc146fc8f236fdfe2a0e8&language=es')
            console.log(result.data.results)
            this.setPeliculaDestacada(result.data.results)
            this.setState({
                estrenos:result.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    setPeliculaDestacada(peliculas){
       const peliculaDestacada = peliculas[Math.floor(Math.random()*peliculas.length)]
       this.setState({
           peliculaDestacada
       })
    }
  render() {
    return (
      <div>
        <Destaque pelicula={this.state.peliculaDestacada} />
        <TituloSeccion>Estrenos:</TituloSeccion>
        <Estrenos data={this.state.estrenos} />
        <TituloSeccion>Próximamente:</TituloSeccion>
        <Estrenos data={this.state.proximos_estrenos} />
      </div>
    );
  }
}

function mapStateToProps({test}) {
    return {
        test
    }
}
export default connect(mapStateToProps)(HomePage)