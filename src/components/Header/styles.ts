import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  padding-top: 64px;
  position: relative;

  a {
    display: block;
  }

  > .container {
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

export const Nav = styled.nav`
  width: 100%;
  align-content: center;
  margin-bottom: 80px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${colors.laranja};
      font-weight: bold;
      font-size: 18px;
      width: 200px;
    }
  }
`

export const HeaderRestaurant = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  color: ${colors.branca};
  position: relative;

  > div {
    background-color: ${colors.pretoOpaco};
    width: 100%;
    height: 280px;
  }

  .container {
    justify-items: left;
    padding-top: 24px;

    p {
      font-size: 32px;
      font-weight: lighter;
    }

    ${Title} {
      text-align: left;
      color: ${colors.branca};
      font-size: 32px;
      bottom: 32px;
    }
  }
`
