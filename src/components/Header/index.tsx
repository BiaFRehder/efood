import { Header as HeaderStyle, Title, HeaderContainer } from './styles'
import fundo from '../../assets/images/fundo.png'
import Logo from '../Logo'

const Header = () => {
  return (
    <HeaderStyle style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderContainer className="container">
        <Logo />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </HeaderContainer>
    </HeaderStyle>
  )
}

export default Header
