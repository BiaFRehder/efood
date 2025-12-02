import { Link } from 'react-router-dom'
import { HeaderRestaurant, Header as HeaderStyle, Nav, Title } from './styles'
import fundo from '../../assets/images/fundo.png'
import italiana from '../../assets/images/italiana.png'
import Logo from '../Logo'

type Props = {
  page: 'home' | 'trattoria'
}

const Header = ({ page }: Props) => {
  if (page === 'home') {
    return (
      <HeaderStyle style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
          <Link to="/">
            <Logo />
          </Link>
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
              <a href="">Restaurantes</a>
            </li>
            <li>
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <li>
              <a href="">0 produto(s) no carrinho</a>
            </li>
          </ul>
        </div>
      </Nav>
      <HeaderRestaurant style={{ backgroundImage: `url(${italiana})` }}>
        <div>
          <div className="container">
            <p>Italiana</p>
            <Title>La Dolce Vita Trattoria</Title>
          </div>
        </div>
      </HeaderRestaurant>
    </HeaderStyle>
  )
}

export default Header
