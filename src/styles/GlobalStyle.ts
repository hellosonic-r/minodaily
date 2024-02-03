import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<any>`
    * {
        color: ${props => props.theme.text_primary_color}
    }
    body {
        background-color: ${props => props.theme.background_color};

    }
    #root {
        width: 100%;
        max-width: 1600px;
        height: 100%;
        margin: 0 auto;
    }

`;
