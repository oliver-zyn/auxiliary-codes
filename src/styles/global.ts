import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --base-background: #071422;
        --base-title: #E7EDF4;
        --base-text: #AFC2D4;
        --base-border: #1C2F41;
        --base-input: #040F1A;
        --base-label: #3A536B;
        --base-subtitle: #C4D4E3;
        --base-card: #112131;
        --brand-blue: #3294F8;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--base-background);
        width: 100%;
        color: var(--base-title);
    }

    main {
        max-width: 1000px;
        margin: auto;
        padding: 0 40px;
    }

    body, input, textarea, button {
        font-family: 'Poppins', monospace;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 900px) {
        html {
            font-size: 87.5%;
        }
    }

    body::-webkit-scrollbar {
        width: .3em;
    }
 
    body::-webkit-scrollbar-thumb {
        background-color: var(--base-title);
        border-radius: 6px;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        outline: none;
    }

`