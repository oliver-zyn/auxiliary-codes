import styled from "styled-components";

export const SelectCardContainer = styled.div`
  max-width: 23ch;
  text-align: center;
  background: var(--base-card);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

div {
  
  img {
    width: 10rem;
  }

}

& > :not(span) {
  transition: .3s cubic-bezier(.6,.4,0,1);
}

& > span {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--base-title);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
}

&:hover span {
  top: 0;
  font-size: 1.2em;
}

&:hover {
  background: var(--brand-blue);
}

&:hover>div {
  opacity: 0;
}
`