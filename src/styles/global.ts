import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * { 
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${props => props.theme['gray-100']};
    }

    body {
        background: ${props => props.theme['gray-100']};
        overflow-x: hidden;

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;