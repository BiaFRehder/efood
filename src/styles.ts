import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  laranja: '#E66767',
  fundoBody: '#FFF8F2',
  bege: '#FFEBD9',
  branca: '#ffffff',
  pretoOpaco: '#00000080',
  preto: '#000'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
    text-decoration: none;
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

export const CardContainer = styled.div`
  padding: 80px 0;
`

export const Title = styled.h2`
  font-weight: bold;
  margin-top: 8px;
`

export const TextDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
`
