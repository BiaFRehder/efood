import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  padding-top: 64px;
`

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${colors.laranja};
      font-weight: bold;
      font-size: 18px;
    }
  }
`
