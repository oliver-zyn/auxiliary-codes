import styled from "styled-components";

export const SelectListContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    background: var(--base-card);
    padding: 1rem 1.5rem;
    border-radius: 5px;
    gap: 1rem;

    img {
      width: 3rem;
    }
  }
`