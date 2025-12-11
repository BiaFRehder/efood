import { Link } from 'react-router-dom'
import star from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Button, Card, Description, Image, Infos, Tags, Title } from './styles'

export type Props = {
  capa: string
  avaliacao: string
  titulo: string
  descricao: string
  tipo: string[]
}

const RestaurantCard = ({
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
        {tipo.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Infos>
        <Title>{titulo}</Title>
        <div>
          <p>{avaliacao}</p>
          <img src={star} alt="" />
        </div>
        <Description>{descricao}</Description>
        <Link to="/restaurantes/:id">
          <Button>Saiba mais</Button>
        </Link>
      </Infos>
    </Card>
  )
}

export default RestaurantCard
