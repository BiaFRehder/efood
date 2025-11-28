import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  height: 384px;
  position: relative;
`

export const HeaderContainer = styled.div`
  display: block;
  justify-items: center;
`

export const Logo = styled.img`
  display: flex;
  width: 125px;
  padding-top: 40px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.laranja};
  text-align: center;
  max-width: 544px;
  padding-bottom: 40px;
  position: absolute;
  bottom: 0;
`
