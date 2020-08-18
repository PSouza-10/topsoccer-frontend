import React from 'react';

import { GreetingsContainer } from './styles';
import { Button } from 'reactstrap';

const Greetings: React.FC = () => {
  return <GreetingsContainer>
      Olá, Seja Bem Vindo ao TopSoccer!
      <span>
      <Button color="custom-primary-light" block >Reservar o espaço</Button>
      <Button color="custom-primary-dark" block >Login</Button>
      <Button color="custom-primary-dark" block >Não tem conta? Cadastre-se aqui.</Button>
      </span>
  </GreetingsContainer>
}

export default Greetings;