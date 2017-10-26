import React from "react";
import Destaque from "../componentes/Destaque";
import Estrenos from "../componentes/Estrenos";
import axios from 'axios'
export default class HomePage extends React.Component {
    state = {
        estrenos:[],
        peliculaDestacada:""
    }
    componentDidMount() {
        this.getPopularMovies()
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
        <Estrenos data={this.state.estrenos} />
      </div>
    );
  }
}
