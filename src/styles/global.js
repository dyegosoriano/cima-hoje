import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;

    background: linear-gradient(180deg, #0091ea 30%, #84ffff 70%);
    color: #424242;

    display: flex;
    flex-direction:column;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 600 18px Roboto, sans-serif;
  }
`
