import styled from 'styled-components'

export const ContainerCodeSnippet = styled.aside`
  font-family: monospace;
  margin-top: 20px;
  border-radius: 4px;
  position: relative;

  > pre {
    background: var(--base-card) !important;
    border-radius: 4px;
    padding: 0 2rem !important;
  }

  button {
    position: absolute;
    top: 18px;
    right: 18px;
    background: var(--base-border);
    outline: none;
    border-radius: 4px;
    border: 0;
    padding: 7px;
    color: var(--base-title);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--brand-blue);
    font-size: 0.75rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    transition: color 0.3s;
  }

  button:hover {
    color: var(--base-title);
  }
`
