import { Link } from 'react-router-dom'
import star from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Button, Card, Description, Image, Infos, Tags, Name } from './styles'

export type Props = {
  id: number
  capa: string
  avaliacao: string
  titulo: string
  descricao: string
  tipo: string
}

const RestaurantCard = ({
  id,
  capa,
  avaliacao,
  titulo,
  descricao,
  tipo
}: Props) => {
  return (
    <Card>
      <Image src={capa} alt={`Restaurante ${titulo}`} />
      <Tags>
        <Tag>{tipo}</Tag>
      </Tags>
      <Infos>
        <Name>{titulo}</Name>
        <div>
          <p>{avaliacao}</p>
          <img src={star} alt="" />
        </div>
        <Description>{descricao}</Description>
        <Link to={`/restaurantes/${id}`}>
          <Button>Saiba mais</Button>
        </Link>
      </Infos>
    </Card>
  )
}

export default RestaurantCard
