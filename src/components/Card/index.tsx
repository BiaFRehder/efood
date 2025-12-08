import { Link } from 'react-router-dom'
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

export type Props = {
  variant: string
  image: string
  altImage: string
  rating: string
  name: string
  description: string
  category: string[]
}

const Card = ({
  variant,
  image,
  altImage,
  rating,
  name,
  description,
  category
}: Props) => {
  if (variant === 'restaurant') {
    return (
      <CardStyle $variant="restaurant">
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
          <Link to="/la-dolce-vita-trattoria">
            <Button>Saiba mais</Button>
          </Link>
        </CardContainer>
      </CardStyle>
    )
  }

  return (
    <CardStyle $variant="menu">
      <CardImage src={image} alt={altImage} />
      <CardContainer>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button>Adicionar ao carrinho</Button>
      </CardContainer>
    </CardStyle>
  )
}

export default Card
