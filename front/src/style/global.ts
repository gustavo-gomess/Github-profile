import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    :root {
        --background: #FFFFFF;
        --backgroundheader: rgb(101, 121, 154);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body {
        background: var(--background); 
        font-size: 18px;
        color: rgb(51, 51, 51);
        font-family: sans-serif;
    }

    

    body, input, button, h1 {
        font-family: 'Poppins', sans-serif ;
        font-weight: 700;
        
    }

    h4, P {
        font-family: 'Poppins', sans-serif ;
        font-weight: 500;
    }

    button {
        cursor: pointer; 
    }

`;
