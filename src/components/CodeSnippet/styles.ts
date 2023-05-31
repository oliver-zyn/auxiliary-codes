import styled from "styled-components";

export const ContainerCodeSnippet = styled.aside`

    font-family: monospace;
    margin-top: 20px;
    border-radius: 6px;
    position: relative;

    > pre {
      background: var(--base-card) !important;
      border-radius: 6px;
      padding: 0 2rem !important;
    }

    button {
        position: absolute;
        top: 25px;
        right: 25px;
        background: transparent;
        outline: none;
        border: 0;
        color: var(--base-title);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--brand-blue);
        font-size: 0.75rem;
        font-weight: 700;
        font-family: 'Nunito', sans-serif;
        transition: filter .3s;
    }

    button:hover {
      filter: brightness(1.3);
    }

`