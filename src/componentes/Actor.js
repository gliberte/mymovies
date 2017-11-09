import React from "react";
import styled from "styled-components";
import DummyFoto from '../img/dummy-image.jpg'


const urlbaseImage = "https://image.tmdb.org/t/p/w185/";

const Container = styled.div`
    border:2px solid gold;
    margin:2px;
`;
const Nombre = styled.span`
    background:rgba(0,0,0,0.5);
    color:white;
`

const Foto = styled.img`
`

export default ({ actor }) => (

    
    <Container>
      <Foto src={actor.profile_path ? urlbaseImage+actor.profile_path : DummyFoto} alt=""/>
      <Nombre>{actor.name}</Nombre>
    </Container>

);
