import styled from 'styled-components'

export const FormStyled = styled.div`
  padding: 16px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .handle__button {
    background: #0091ea;
    color: #fff;
    margin-top: 32px;

    &:hover {
      background: #01579b;
    }
  }

  .text__input {
    padding-bottom: 20px;
    width: 80%;
  }
`
