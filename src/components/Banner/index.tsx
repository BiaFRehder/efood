import { BannerContainer } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ capa, tipo, titulo }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <p>{tipo}</p>
        <h2>{titulo}</h2>
      </div>
    </BannerContainer>
  )
}

export default Banner
