import styled from 'styled-components'

export const Container = styled.div`
  margin: 16px;

  display: grid;
  grid-template-rows: 60px auto 60px;
  grid-gap: 16px;

  header {
    width: 100%;

    h1 {
      text-align: center;
      font-size: 2.4rem;
      font-weight: 300;
    }
  }

  main {
    height: 350px;
    overflow: auto;
  }

  footer {
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`
