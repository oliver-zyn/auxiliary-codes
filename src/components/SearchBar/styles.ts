import styled from "styled-components";

export const ContainerSearchBar = styled.section`

    display: flex;
    flex-direction: column;
    gap: 12px;

    span {
        font-weight: 500;
        color: var(--base-subtitle);
    }
    
    input {
        border: 1px solid var(--base-border);
        outline: none;
        background: var(--base-input);
        border-radius: 6px;
        padding: 9px 16px;
        color: var(--base-subtitle);
    }

    input::placeholder {
        color: var(--base-label);
    }

`