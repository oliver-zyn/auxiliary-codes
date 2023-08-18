import styled from "styled-components";
import { Link } from 'react-router-dom'

export const SelectCardContainer = styled(Link)`
  background: var(--base-card);
  padding: 1.5em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  cursor: pointer;

  &:hover span {
    top: 0;
    font-size: 1.2em;
  }

  &:hover {
    background: var(--brand-blue);
  }

  &:hover > img {
    opacity: 0;
  }

  & > :not(span) {
    transition: .3s cubic-bezier(.6,.4,0,1);
  }
  
  img {
    width: 10rem;
  }

  & > span {
    position: absolute;
    inset: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--base-title);
    font-weight: bold;
    top: 100%;
    transition: all .3s cubic-bezier(.6,.4,0,1);
  }
`