import {createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{



        @media (min-device-width: 375px) 
        and (max-device-width: 667px) { 
            background-color: #37306B;
        }
    }
`