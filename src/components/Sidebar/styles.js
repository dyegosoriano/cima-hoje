import styled from 'styled-components'

import bg from '../../assets/bg.png'

export const Aside = styled.aside`
  background: url(${bg}) no-repeat;
  background-size: cover;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 300;
    text-align: center;
    padding: 16px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`
