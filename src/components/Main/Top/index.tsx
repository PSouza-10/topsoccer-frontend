import React from 'react'
import Greetings from './Greetings'
import {Container} from './styles'
import Slides from './Slides'

export default function Top() {
    return ( 
           <Container>
               <Greetings/>
               <Slides/>
           </Container>
    )
}
