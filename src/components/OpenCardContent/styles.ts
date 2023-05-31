import styled from "styled-components";


export const ContainerOpenCardContent = styled.section`

    padding: 40px 20px;

    p {
        line-height: 160%;
        color: var(--base-text);
    }

    pre {
        font-family: monospace;
        margin-top: 20px;
        padding: 25px;
        background: var(--base-card);
        border-radius: 6px;
        position: relative;

        span {
            position: absolute;
            top: 25px;
            right: 25px;
        }
    }

`