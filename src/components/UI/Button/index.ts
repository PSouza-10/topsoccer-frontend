import styled from "styled-components";

interface Props {
    color?: string;
    outline?: boolean;
    block?: boolean;
}

const Button  = styled.button<Props>`${
    ({color,block,outline}) => `
        
        background-color: ${
            outline ? 'inherit' : `var(--${color})`
        };
        padding : 8px 12px;
        color: ${outline ? `var(--${color})` : 'inherit' };
        border :  ${outline ? `2px solid var(--${color})` : 'none'};
        border-radius : 0.5em 0.5em;
        cursor : pointer;

        ${
            block ? `
                width: 80%;
                margin: 10%;
            `:''
        }

        &:hover  { 
            background-color : var(--${color}-dark);
            color : inherit; 
            
        }
        &:focus {
            background: var(--${color}-dark);
            outline: none;
            color: inherit;
            ${!outline ? 
               `
                -webkit-box-shadow:  0px 0px 3px 1px var(--${color}-light);
                -moz-box-shadow:     0px 0px 3px 1px var(--${color}-light);
                box-shadow:          0px 0px 3px 1px var(--${color}-light);
               `
            :
                ''
            }
        }
       
        `
    }
`
const defaultProps: Props = {
    color: 'primary',
    block: false,
    outline: false
}

Button.defaultProps = defaultProps

export default Button 