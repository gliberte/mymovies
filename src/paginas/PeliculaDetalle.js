import React from "react";
import axios from "axios";

import Destaque from "../componentes/Destaque";
import Cast from "../componentes/Cast";

export default class PeliculaDetalle extends React.Component {
  state = {
    pelicula: ""
  };

  componentDidMount() {
    const { peliculaid } = this.props.match.params;
    this.getPeliculaDetalles(peliculaid);
    this.getCredits(peliculaid);
  }
  getCredits = async peliculaid => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${peliculaid}/credits?api_key=5f27999c516bc146fc8f236fdfe2a0e8&language=es`
      );
      console.log(result.data);
      this.setState({
        cast: result.data
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  getPeliculaDetalles = async peliculaid => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${peliculaid}?api_key=5f27999c516bc146fc8f236fdfe2a0e8&language=es`
      );
      this.setState({
        pelicula: result.data
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <div>
        <Destaque pelicula={this.state.pelicula} />
        <Cast cast={this.state.cast} />
      </div>
    );
  }
}
