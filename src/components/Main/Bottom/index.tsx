import React from 'react'
import {Equipe} from '../../../assets/image'

import {Container,ImageWrapper,InfoText,Facebook,Whatsapp,Contact} from './styles'

export default function Bottom() {
    return (
        <Container>
            <ImageWrapper>
                <img src={Equipe} alt="Equipe TopSoccer"/>
            </ImageWrapper>
            <InfoText>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores atque eos ullam quos quo, sequi, sunt asperiores illum eveniet officia? Blanditiis assumenda perferendis et, amet mollitia voluptates reprehenderit pariatur?
               <Contact>
                <Whatsapp/>
                <Facebook/>
            </Contact>
            </InfoText>
            
        </Container>
    )
}
