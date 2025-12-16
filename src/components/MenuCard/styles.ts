import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { colors, TextDescription, Title } from '../../styles'

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
  object-fit: cover;
`

export const Name = styled(Title)`
  font-size: 16px;
`

export const Description = styled(TextDescription)`
  padding: 8px 0;
`

export const Button = styled(ButtonContainer)`
  background-color: ${colors.bege};
  color: ${colors.laranja};
  width: 100%;
`
