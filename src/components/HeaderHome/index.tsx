import Logo from '../Logo'
import fundo from '../../assets/images/fundo.png'
import { Header, Title } from './styles'

const HeaderHome = () => {
  return (
    <Header style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <Logo />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </div>
    </Header>
  )
}

export default HeaderHome
