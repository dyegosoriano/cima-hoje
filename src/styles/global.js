import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width:100vw;
    height:100vh;

    background: #EBF2F5;
    color: #212121;

    display:flex;
    justify-content:center;
    align-items:center;
  }

  body, input, button, textarea {
    font: 600 18px Roboto, sans-serif;
  }
`
