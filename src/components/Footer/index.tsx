import React from 'react'
import logo from '../../assets/image/logo.png'


import {Container} from './style'


export default function Footer () {
    return (
       <Container>
          <img src={logo} alt="Logo"/>
          <ul>
              <li>Quem Somos</li>
              <li>Privacidade</li>
              <li>Termos</li>
              <li>Ajuda</li>
          </ul>
       </Container> 
    )
}

