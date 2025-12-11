import ContentCard from '../../models/ContentCard'
import RestaurantCard from '../RestaurantCard'

import { CardContainer } from '../../styles'
import { List } from './styles'

type Props = {
  cards: ContentCard[]
}

const RestaurantList = ({ cards }: Props) => {
  return (
    <CardContainer>
      <div className="container">
        <List>
          {cards.map((ContentCard) => (
            <RestaurantCard
              key={ContentCard.id}
              capa={ContentCard.image}
              avaliacao={ContentCard.rating}
              titulo={ContentCard.name}
              descricao={ContentCard.description}
              tipo={ContentCard.category}
            />
          ))}
        </List>
      </div>
    </CardContainer>
  )
}

export default RestaurantList
