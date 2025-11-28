import { Header as StyleHeader, Logo, Title, HeaderContainer } from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const Header = () => {
  return (
    <StyleHeader style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderContainer className="container">
        <Logo src={logo} alt="Logo EFood" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </HeaderContainer>
    </StyleHeader>
  )
}

export default Header
