import styled from 'styled-components'

export const ContainerLinkButton = styled.div`
  a {
    display: flex;
    align-items: center;
    color: var(--brand-blue);
    gap: 5px;
    font-size: 0.75rem;
    font-weight: 700;
  }

  :hover {
    text-decoration: underline;
    text-decoration-color: var(--brand-blue);
  }
`
