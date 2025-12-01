import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.bege};
  color: ${colors.laranja};
  padding: 40px 0;

  .container {
    justify-items: center;
  }
`

export const ListSocialMedia = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;

  li {
    padding-right: 8px;
  }

  img {
    width: 24px;
  }
`

export const Text = styled.p`
  font-size: 10px;
  max-width: 480px;
  text-align: center;
`
