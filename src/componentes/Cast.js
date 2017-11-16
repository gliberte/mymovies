import React from 'react'
import styled from 'styled-components'
import Actor from './Actor'
import TituloSeccion from "./TituloSeccion";

const Container = styled.div`
    display:flex;
    overflow:scroll;
`

const Cargando = styled.div`
    text-align:center;
    font-size:22px;
    color:red;
`


export default ({cast})=>{
    if(cast){
        return (
            <div>
                <TituloSeccion>Reparto:</TituloSeccion>
                <Container>
                {cast.cast.map(actor=>(
                    <Actor actor={actor}/>
                ))}
                </Container>
            </div>
            
        )
    }else{
        return <Cargando>Cargando...</Cargando>
    }
    
    

}
