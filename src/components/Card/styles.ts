import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.branca};
  color: ${colors.laranja};
  position: relative;
  margin-bottom: 48px;
`

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  postion: absolute;
  top: 0;
  left: 0;
`

export const Tags = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardContainer = styled.div`
  position: relative;
  padding: 8px;
  border: 1px solid ${colors.laranja};
  border-top: none;

  div {
    display: flex;
    position: absolute;
    right: 8px;
    top: 8px;
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
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  padding: 16px 0;
  line-height: 22px;
`
