import styled from "styled-components";
import {BsPeopleCircle} from 'react-icons/bs'

export const Container = styled.div`
    background-color: var(--bg-dark);
    color: var(--text-light);
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    span {
        font-size: 1em;
    }

    img {
        width: 40px;
        height: 35px;
     
      
    }

    div{
        display: none;
    }

    @media (min-width: 768px){
        div{
            display: initial;
        }
        
    }

    @media (max-width: 768px){
        img{
        margin-right: 40px;
       }
    }
`
export const UserIcon = styled(BsPeopleCircle)`
    fill: white;
    height: 35px;
    width: 35px;
    flex-grow: 0;
    cursor: pointer;


    @media (min-width: 768px){
        display: none;

       
    }
`
