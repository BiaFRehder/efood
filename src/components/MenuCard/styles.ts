import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.laranja};
  color: ${colors.bege};
  position: relative;
  padding: 8px;
`

export const Picture = styled.img`
  width: 100%;
  position: static;
  height: 167px;
`

export const Name = styled.h3`
  font-weight: bold;
  margin-top: 8px;
  font-size: 16px;
`

export const Description = styled.p`
  padding: 8px 0;
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled(ButtonContainer)`
  background-color: ${colors.bege};
  color: ${colors.laranja};
  width: 100%;
`
