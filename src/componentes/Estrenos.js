import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const urlbaseImage = "https://image.tmdb.org/t/p/w154/";

const Contenedor = styled.div`
  > ul {
    background: rgba(38,50,56 ,1);
    padding-left: 0;
    overflow:scroll;
    display:flex;
    margin:0;
    align-items:stretch;

  }
`;
const ItemPelicula = styled(Link)`
  list-style: none;
  display: inline-block;
  min-width:200px;
  background:url(${props => urlbaseImage+props.pelicula.poster_path}) no-repeat;
  background-size:cover;
  margin:5px;
  height:300px;
  font-family: 'Amatic SC', cursive;
  color:yellow;
  font-size:22px;
  font-weight:bold;
  >span{
      display:none;
      background:rgba(38,50,56 ,0.5);
  }
  &:hover{
    cursor:pointer;
    >span{
        display:block;
    }
  }

`;

export default ({ peliculas }) => (
  <Contenedor>
    <ul>
      {peliculas.map(pelicula => (
        <ItemPelicula key={pelicula.id} to={`/detalles/${pelicula.id}`} pelicula={pelicula}>
          <span>{pelicula.title}</span>
        </ItemPelicula>
      ))}
    </ul>
  </Contenedor>
);
