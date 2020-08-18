import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        --primary-light:  rgba(217, 89, 106, 0.4);;
        --primary: #b3293bff;
        --primary-dark: #962231;
        
        --secondary-light: rgba(236, 173, 63, 0.6);
        --secondary: #ecad31ff;
        --secondary-dark: #DF9516;

        --bg-dark: #333333;
        --bg-light: #ecf1f8;
        --text-light: #ffffffff;
        --text-dark: #111111;
        --icon : #444444;

        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        
        max-width: 100%;


    }

    :root,body,.App{
        background-color : var(--bg-light);
        color: var(--text);
        max-height: 100%;
    }

    
`