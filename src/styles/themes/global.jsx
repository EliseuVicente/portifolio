import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html, body {
    width: 100vw;
    background: ${props => props.theme['background']};
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
}
`