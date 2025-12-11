import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.div`
  padding-top: 64px;
  position: relative;

  .container {
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
