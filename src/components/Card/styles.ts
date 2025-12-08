import styled from 'styled-components'
// import { Props } from '.'

import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type Props = {
  $variant: 'restaurant' | 'menu'
}

export const Title = styled.h2`
  font-weight: bold;
  margin-top: 8px;
`

export const CardImage = styled.img`
  display: block;
  top: -1px;
  left: -1px;
`

export const CardContainer = styled.div`
  position: relative;

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

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const Tags = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`

export const Card = styled.div<Props>`
  background-color: ${(props) =>
    props.$variant === 'restaurant' ? colors.branca : colors.laranja};
  color: ${(props) =>
    props.$variant === 'restaurant' ? colors.laranja : colors.bege};
  position: relative;
  padding: 8px;
  border: 1px solid ${colors.laranja};

  ${Title} {
    font-size: ${(props) =>
      props.$variant === 'restaurant' ? '18px' : '16px'};
  }

  ${CardImage} {
    width: ${(props) =>
      props.$variant === 'restaurant' ? 'calc(100% + 2px)' : '100%'};
    position: ${(props) =>
      props.$variant === 'restaurant' ? 'absolute' : 'static'};
    height: ${(props) => (props.$variant === 'restaurant' ? '217px' : '167px')};
  }

  ${CardContainer} {
    margin-top: ${(props) => (props.$variant === 'restaurant' ? '217px' : '0')};
  }

  ${Description} {
    padding: ${(props) =>
      props.$variant === 'restaurant' ? '16px 0' : '8px 0'};
  }

  ${ButtonContainer} {
    background-color: ${(props) =>
      props.$variant === 'restaurant' ? colors.laranja : colors.bege};
    color: ${(props) =>
      props.$variant === 'restaurant' ? colors.bege : colors.laranja};
    width: ${(props) => (props.$variant === 'restaurant' ? '' : '100%')};
  }
`
