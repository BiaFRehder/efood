import Restaurant from '../../models/Restaurant'
import Card from '../Card'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const CardList = ({ restaurants }: Props) => {
  return (
    <Container className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            type={restaurant.type}
            image={restaurant.image}
            altImage={restaurant.altImage}
            name={restaurant.name}
            rating={restaurant.rating}
            category={restaurant.category}
            description={restaurant.description}
          />
        ))}
      </List>
    </Container>
  )
}

export default CardList
