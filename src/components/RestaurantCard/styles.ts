import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  position: relative;
  background-color: ${colors.branca};
  color: ${colors.laranja};
  padding: 8px;
  border: 1px solid ${colors.laranja};
`

export const Image = styled.img`
  display: block;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  position: absolute;
  height: 217px;
`

export const Tags = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;

  div {
    margin-left: 8px;
    background-color: ${colors.laranja};
    color: ${colors.bege};
    padding: 4px 6px;
    border: none;
    font-size: 12px;
    font-weight: bold;
  }
`

export const Infos = styled.div`
  position: relative;
  margin-top: 217px;

  div {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    align-items: center;

    p {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      width: 21px;
      height: 21px;
      margin-left: 8px;
    }
  }
`

export const Title = styled.h2`
  font-weight: bold;
  margin-top: 8px;
  font-size: 18px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 16px 0;
`

export const Button = styled(ButtonContainer)`
  background-color: ${colors.laranja};
  color: ${colors.bege};
`
