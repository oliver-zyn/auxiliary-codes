import styled from 'styled-components'
import headerBg from '../../assets/headerBg.png'

export const HeaderContainer = styled.header`
  height: 14rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;

  h1 {
    font-weight: 600;
    font-size: 2.8rem;
  }

  p,
  a {
    color: var(--base-subtitle);
    font-size: 1.1rem;
  }

  a {
    text-decoration: underline;
  }
`
