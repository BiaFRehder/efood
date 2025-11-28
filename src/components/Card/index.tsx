import {
  Description,
  CardImage,
  Card as CardStyle,
  Title,
  CardContainer,
  Tags
} from './styles'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  image: string
  altImage: string
  rating: string
  name: string
  description: string
  category: string[]
}

const Card = ({
  image,
  altImage,
  rating,
  name,
  description,
  category
}: Props) => {
  return (
    <CardStyle>
      <CardImage src={image} alt={altImage} />
      <Tags>
        {category.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <CardContainer>
        <Title>{name}</Title>
        <div>
          <p>{rating}</p>
          <img src={estrela} alt="" />
        </div>
        <Description>{description}</Description>
        <Button>Saiba mais</Button>
      </CardContainer>
    </CardStyle>
  )
}

export default Card
