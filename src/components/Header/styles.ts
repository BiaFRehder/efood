import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  height: 384px;
  position: relative;
  padding: 40px 0;

  a {
    display: block;
  }

  div {
    justify-items: center;
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
