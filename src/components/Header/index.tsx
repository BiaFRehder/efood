import { Link } from 'react-router-dom'
import { Header as HeaderStyle, Nav, Title } from './styles'
import fundo from '../../assets/images/fundo.png'

import Logo from '../Logo'
import Banner from '../Banner'

type Props = {
  page: 'home' | 'restaurants'
}

const Header = ({ page }: Props) => {
  if (page === 'home') {
    return (
      <HeaderStyle style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
          <Logo />
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </div>
      </HeaderStyle>
    )
  }

  return (
    <HeaderStyle style={{ backgroundImage: `url(${fundo})` }}>
      <Nav>
        <div className="container">
          <ul>
            <li>
              <Link to="/">
                <a href="">Restaurantes</a>
              </Link>
            </li>
            <li>
              <Logo />
            </li>
            <li>
              <a href="">0 produto(s) no carrinho</a>
            </li>
          </ul>
        </div>
      </Nav>
      <Banner />
    </HeaderStyle>
  )
}

export default Header
