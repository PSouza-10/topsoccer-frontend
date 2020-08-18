import React from 'react'
import logo from '../../assets/image/logo.png'
import ModalForm from './FormModal'


import {Container, UserIcon} from './style'


export default function Header () {
    return (
       <Container>
           <span>TopSoccer</span>
           <img src={logo} alt="Logo"/>
           <div>

           <ModalForm name="Login"/>
           <ModalForm name="Cadastro"/>
           </div>
           <UserIcon/>
       </Container> 
    )
}

