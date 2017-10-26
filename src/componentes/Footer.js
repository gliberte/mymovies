import React from 'react'
import styled from 'styled-components'
import Logo from '../img/moviedblogo.png'

const Footer = styled.div`
    background:rgba(38,50,56 ,1);
    padding:20px;
`

export default ()=>(
    <Footer>
        <img src={Logo} alt="logo moviedb" width="200" height="75"/>
    </Footer>
)