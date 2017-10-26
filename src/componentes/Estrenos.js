import React from 'react'
import styled from 'styled-components'

const Contenedor = styled.div`
    >ul{
        background:rgba(66,165,245 ,1);
        padding-left:0;
    }
`
const ItemPelicula = styled.li`
    list-style:none;
`
export default ({data})=>(
    <Contenedor>
        <ul>
            {data.map(pelicula=>(
                <ItemPelicula key={pelicula.id}>
                    {pelicula.title}
                </ItemPelicula>
            ))}
        </ul>
    </Contenedor>
)