import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  padding-top: 64px;
  position: relative;

  a {
    display: block;
  }

  > .container {
    justify-items: center;
    height: 320px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.laranja};
  text-align: center;
  max-width: 544px;
  position: absolute;
  bottom: 40px;
`

export const Nav = styled.nav`
  width: 100%;
  align-content: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${colors.laranja};
      font-weight: bold;
      font-size: 18px;
      width: 200px;
    }
  }
`
