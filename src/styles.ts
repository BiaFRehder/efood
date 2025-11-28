import { createGlobalStyle } from 'styled-components'

export const colors = {
  laranja: '#E66767',
  fundoBody: '#FFF8F2',
  bege: '#FFEBD9',
  branca: '#ffffff'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.fundoBody};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
