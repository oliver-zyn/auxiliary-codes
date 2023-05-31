import styled from "styled-components";

export const ContainerCard = styled.article`

    background: var(--base-card);
    border-radius: 6px;
    padding: 25px;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;

    animation: card-anim .4s ease-in-out forwards;

    h2 {
        font-size: 1.1rem;
        font-weight: 500;
    }

    p {
        color: var(--base-text);
        padding-top: 15px;
        line-height: 160%;
        font-size: 0.9rem;
    }

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

    @keyframes card-anim {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }

        100% {
            opacity: 1;
            translate: 0;
        }
    }

`