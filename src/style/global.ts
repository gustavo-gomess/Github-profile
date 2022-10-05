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
    }

    html{
        @media (max-width: 1080px){
            fonst-size: 93.73%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body, input, button, h1{
        font-family: 'Poppins', sans-serif ;
        font-weight: 900;
    }

    button {
        cursor: pointer; 
    }

`;