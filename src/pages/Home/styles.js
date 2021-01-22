import styled from 'styled-components'

export const FormStyled = styled.main`
  padding: 16px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .text__input {
    padding-bottom: 16px;
    width: 80%;
  }

  .msg__error {
    font-weight: 300;
    font-size: 1rem;
    color: #ff1744;
  }

  .handle__button {
    background: #0091ea;
    margin-top: 16px;
    color: #fff;

    &:hover {
      background: #01579b;
    }
  }
`
