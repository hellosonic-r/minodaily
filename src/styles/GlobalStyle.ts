import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<any>`
    * {
        color: ${props => props.theme.text_primary_color}
    }
    body {
        background-color: ${props => props.theme.background_color};
    }

`;
