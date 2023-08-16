import styled from 'styled-components'

export const ContainerDownloadCard = styled.button`
  width: 100%;
  background: var(--brand-blue);
  margin-top: 20px;
  padding: 10px 0;
  border-radius: 4px;
  cursor: pointer;
  border: 0;
  outline: none;
  color: var(--base-title);
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  transition: filter 0.2s;

  :hover {
    filter: brightness(1.2);
  }

  :active {
    filter: brightness(1);
  }
`
