import styled from "styled-components";

export const ContainerOpenCardHeader = styled.header`

    background: var(--base-card);
    margin-top: 40px;
    border-radius: 6px;
    padding: 25px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            color: var(--brand-blue);
            gap: 5px;
            font-size: 0.75rem;
            font-weight: 700;
        }

        a:hover {
            text-decoration: underline;
        }
    }

    h1 {
        font-size: 1.5rem;
        padding-top: 10px;
    }

    margin-top: -80px;
    
    

`