import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--bg-dark);
    color: var(--text-light);
    padding: 10px 20px;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    height: 60px;
    font-size: 8pt;

    img {
        width: 40px;
        height: 40px;
        align-self: center;
    }
    
    ul { 
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items:center;
       
    }

    li {

        margin-right: 10px;

    }

     @media (min-width: 576px){
         font-size: 16pt;
     }
     @media (min-width: 370px){
         font-size: 12pt;
     }
    
`

