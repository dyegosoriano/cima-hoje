import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 350 60px;
  grid-gap: 16px;

  padding: 16px;

  h1,
  span {
    font-weight: 300;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 2.4rem;
    }

    .weather__description {
      font-size: 0.9rem;
      margin: -8px 0px 16px 0px;
    }

    .weather__banner {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 1.4rem;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }

    .data {
      width: 100%;
      display: flex;
      justify-content: center;

      span {
        margin-left: 16px;
        font-size: 0.9rem;

        :nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }

  main {
    font-size: 1rem;
    font-weight: 300;

    display: flex;
    justify-content: center;

    span {
      font-size: 0.9rem;
      margin-left: 8px;
    }
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      background: #0091ea;
      color: #fff;

      &:hover {
        background: #01579b;
      }
    }
  }

  @media (max-width: 1024px) {
    height: 100vh;
    grid-template-rows: auto auto auto;
  }
`
