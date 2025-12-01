import { Link } from 'react-router-dom'
import { Header as HeaderStyle, Title } from './styles'
import fundo from '../../assets/images/fundo.png'
import Logo from '../Logo'

const Header = () => {
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

export default Header
