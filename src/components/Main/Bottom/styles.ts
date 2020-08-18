import styled from 'styled-components';
import {FaWhatsapp,FaFacebook} from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  padding: 20px 10px;
  @media (min-width: 1026px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
    flex-basis: 45%;
    
    img{
        border-radius: 0.5em;
        width: 100%;
        height: 100%;
    }
`;
 
export const InfoText = styled.p`
  word-wrap: normal ;
  text-align: justify;
  flex-basis: 45%;
  padding-top: 10px;
`;

export const Contact = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;
  padding-top: 25px;
`

export const Whatsapp = styled(FaWhatsapp)`
 color: var(--success);
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const Facebook = styled(FaFacebook)`
 color: var(--blue);
  width: 32px;
  height: 32px;
  cursor: pointer;
`;