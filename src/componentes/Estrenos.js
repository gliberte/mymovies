import React from "react";
import styled from "styled-components";

const urlbaseImage = "https://image.tmdb.org/t/p/w154/";

const Contenedor = styled.div`
  > ul {
    background: rgba(38,50,56 ,1);
    padding-left: 0;
    overflow:scroll;
    display:flex;
    align-items:stretch;

  }
`;
const ItemPelicula = styled.li`
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
    >span{
        display:block;
    }
  }

`;
const PosterImage = styled.img``;
export default ({ data }) => (
  <Contenedor>
    <ul>
      {data.map(pelicula => (
        <ItemPelicula key={pelicula.id} pelicula={pelicula}>
          <span>{pelicula.title}</span>
        </ItemPelicula>
      ))}
    </ul>
  </Contenedor>
);
