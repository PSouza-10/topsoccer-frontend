import styled , {css} from 'styled-components';
import { BsGeoAlt, BsFillClockFill } from 'react-icons/bs'
import {MdAttachMoney} from 'react-icons/md'

export const Container = styled.div`
  display: flex ; 
  justify-content : space-evenly;
  
  padding: 20px 10px;
  flex-direction: column;
  align-items: stretch;
  color: var(--text-dark);
  @media (min-width: 768px){
    flex-direction: row;
    align-items : flex-start;
  }
`;

export const InfoText = styled.p`
  word-wrap: normal ;
  text-align: justify;
  flex-basis: 45%;
  
`;

export const InfoList = styled.ul`
  display :  flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  background-color: #fafafa;
  color: #222222;
  flex-basis: 45%;
  border-radius: 0.5em;
  list-style: none;
  font-weight: 500;
`;

const iconCss = css`
  color: var(--icon);
  flex-grow: 0;
  width: 18px;
  height:  18px;

`;

export const ClockIcon = styled(BsFillClockFill)`
${iconCss}
`;

export const LocationIcon = styled(BsGeoAlt)`
${iconCss}

`;

export const MoneyIcon = styled(MdAttachMoney)`

${iconCss}

`;
