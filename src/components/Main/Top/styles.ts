import styled from 'styled-components';
import {UncontrolledCarousel} from 'reactstrap'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction : column;
  height: calc(100vh - 50px);
  
  @media (min-width:768px ) and (max-width: 1025px){
    flex-direction: row;
    height: calc(50% - 50px);
  }

  @media (min-width: 1026px) {
    flex-direction: row;
    height: calc(100vh - 50px);
  } 

`;

export const GreetingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-basis: 30%;
  padding: 10px 20px;
  background-color: var(--primary);
  font-weight: 700;
  color: var(--text-light);
  font-size: 19pt;
  @media (min-width: 1026px) {
    flex-basis: 35%;
    font-size: 22pt;
  }
`
  
export const Carousel = styled(UncontrolledCarousel)`
  @media (min-width: 1026px) {
    flex: 1;

  }

  .carousel-item img{
    max-height: calc(100vh - 50px);
  }
  .carousel-caption{
    background-color: rgba(0,0,0,0.5);
  }
 
` 