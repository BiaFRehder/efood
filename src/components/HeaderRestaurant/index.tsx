import { Link } from 'react-router-dom'
import { Header, Nav } from './styles'
import fundo from '../../assets/images/fundo.png'
import italiana from '../../assets/images/italiana.png'

import Logo from '../Logo'
import Banner from '../Banner'

const HeaderRestaurant = () => {
  return (
    <Header style={{ backgroundImage: `url(${fundo})` }}>
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
      <Banner
        capa={italiana}
        tipo="Italiana"
        titulo="La Dolce Vita Trattoria"
      />
    </Header>
  )
}

export default HeaderRestaurant
