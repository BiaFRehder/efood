import ContentCard from '../../models/ContentCard'
import Card from '../Card'
import { Container, List } from './styles'

export type Props = {
  cards: ContentCard[]
  variant: 'restaurant' | 'menu'
}

const CardList = ({ cards, variant }: Props) => {
  if (variant === 'restaurant') {
    return (
      <Container className="container">
        <List $variant="restaurantList">
          {cards.map((ContentCard) => (
            <Card
              key={ContentCard.id}
              variant={ContentCard.variant}
              image={ContentCard.image}
              altImage={ContentCard.altImage}
              name={ContentCard.name}
              rating={ContentCard.rating}
              category={ContentCard.category}
              description={ContentCard.description}
            />
          ))}
        </List>
      </Container>
    )
  }

  return (
    <Container className="container">
      <List $variant="menuList">
        {cards.map((ContentCard) => (
          <Card
            key={ContentCard.id}
            variant={ContentCard.variant}
            image={ContentCard.image}
            altImage={ContentCard.altImage}
            name={ContentCard.name}
            rating={ContentCard.rating}
            category={ContentCard.category}
            description={ContentCard.description}
          />
        ))}
      </List>
    </Container>
  )
}

export default CardList
