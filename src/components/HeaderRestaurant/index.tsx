import { Link } from 'react-router-dom'
import { Header, Nav } from './styles'
import fundo from '../../assets/images/fundo.png'

import Logo from '../Logo'
import Banner from '../Banner'
import { Restaurant } from '../../pages/Home'

type Props = {
  banner: Restaurant
}

const HeaderRestaurant = ({ banner }: Props) => {
  const capitalize = (text?: string) => {
    return text ? text[0].toUpperCase() + text.slice(1) : ''
  }

  return (
    <Header style={{ backgroundImage: `url(${fundo})` }}>
      <Nav>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Restaurantes</Link>
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
      <Banner
        capa={banner.capa}
        tipo={capitalize(banner.tipo)}
        titulo={banner.titulo}
      />
    </Header>
  )
}

export default HeaderRestaurant
