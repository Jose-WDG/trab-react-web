import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
}

body {
  background-image: url("./background.png");
  height: 100%;
  min-height: 100%;
  box-shadow: inset 0 0 500px black;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-device-width: 1366px) {
  .body {
    background-attachment: scroll;
  }
}

:root{
    --primary-color: #da5e53;
  }
`
const Container = styled.div`
  color: white;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  .name-title{
    font-size: 46px;
    margin-top: 8px;
    font-weight: bold;
  }

  .office-title {
    font-size: 32px;
    margin: 8px;
  }

  .training {
    font-size: 16px;
    margin: 4px;
  }`

export { GlobalStyle,Container };

