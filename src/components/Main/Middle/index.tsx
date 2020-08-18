import React from 'react'
import {Container,InfoList, InfoText,ClockIcon,MoneyIcon,LocationIcon} from './styles'

export default function Middle() {
    return (
        <Container>
            <InfoText>
            A Top Soccer é um espaço para seu dia de lazer com qualidade, dedicado para o público em geral, oferecendo dois campos de futebol society/grama sintética, quadra de areia para vôlei, frescobol, futevôlei, bar e vestiários. Direcionado as crianças, um lindo parque bem estruturado e aulas de futebol com professores qualificados. Um grande espaço para festas particulares, reuniões de empresas, com ampla área coberta com duas churrasqueiras e tudo que é necessário para que se tenha um dia de alegria, segurança e conforto.
            </InfoText>
            <InfoList>
                <li><ClockIcon/> Das 9h às 23h</li>
                <li><MoneyIcon/> Reservas por até R$200</li>
                <li><LocationIcon/> Unidades em Bebedouro e Monte Azul</li>
            </InfoList>
        </Container>
    )
} 
