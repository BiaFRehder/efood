import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  color: ${colors.branca};
  font-size: 32px;
  padding: 24px 0 32px;
  margin-top: 64px;

  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    position: absolute;
    background-color: ${colors.preto};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    p {
      font-weight: lighter;
    }

    h2 {
      font-size: 32px;
    }
  }
`
