import React from "react";
import styled from "styled-components";

const urlbaseImage = "https://image.tmdb.org/t/p/w780/";
const Inicio = styled.div`
  background: url(${props => urlbaseImage + props.pelicula.backdrop_path})
    no-repeat;
  background-size: cover;
  color: white;
  margin: 0;
  font-size: 22px;
  font-family: "Anton", sans-serif;
  height: 700px;
`;

const PeliculaInfo = styled.div`
  position: relative;
  color: rgba(205, 220, 57, 1);

  span {
    color: rgba(100, 221, 23, 1);
    font-family: "Cinzel", serif;
  }
`;
const PeliculaInfoContent = styled.div`
  position: absolute;
  top: 150px;
  left: 50px;
  background: rgba(38, 50, 56, 0.5);
  padding: 10px;
`;
const PeliculaInfoOverview = styled.p`
  font-size: 14px;
  max-width: 300px;
`;
const PeliculaInfoTitulo = styled.h1`
  color: rgba(255, 179, 0, 1);
  font-family: "Rock Salt", cursive;
`;
export default ({ pelicula }) => (
  <Inicio pelicula={pelicula}>
    <PeliculaInfo>
      <PeliculaInfoContent>
        <PeliculaInfoTitulo>{pelicula.title}</PeliculaInfoTitulo>
        <PeliculaInfoOverview>{pelicula.overview}</PeliculaInfoOverview>
        <span>{`${pelicula.vote_average}/10`}</span>
      </PeliculaInfoContent>
    </PeliculaInfo>
  </Inicio>
);
