import React from 'react'
import {Campo,Futebol,Piscina} from '../../../assets/image'
import { Carousel } from './styles';

const items = [
    {
      src: Campo,
      altText: 'Campo',
      header: 'Venha Utilizar nosso campo!',
      caption : 'Duas quadras de 80m²',
      key: '1'
    },
    {
      src: Piscina,
      altText: 'Piscina',
      header: 'Área de Lazer',
      caption: 'Com churrasqueira, frigobar, lounge, e dois dormitórios!',
      key: '2'
    },
    {
      src: Futebol,
      altText: 'Futebol',
      header: 'Escolinha de Futebol',
      caption: 'Técnicos qualificados',
      key: '3'
    }
  ];
  
  const Slides = () => <Carousel items={items} indicators={true} />

  
  
  export default Slides;