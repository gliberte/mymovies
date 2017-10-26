import React from 'react'
import styled from 'styled-components'

const Inicio = styled.div`
    background: rgba(55,71,79 ,1);
    color:white;
    margin:0;
    font-size:22px;
    font-family: 'Anton', sans-serif;
`

export default ({pelicula})=>(
    <Inicio>
    <h1>{pelicula.title}</h1>
    </Inicio>
)