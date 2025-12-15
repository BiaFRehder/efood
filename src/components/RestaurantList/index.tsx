import RestaurantCard from '../RestaurantCard'

import { CardContainer } from '../../styles'
import { List } from './styles'
import { Restaurant } from '../../pages/Home'

type Props = {
  cards: Restaurant[]
}

const RestaurantList = ({ cards }: Props) => {
  return (
    <CardContainer>
      <div className="container">
        <List>
          {cards.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              capa={restaurant.capa}
              avaliacao={restaurant.avaliacao}
              titulo={restaurant.titulo}
              descricao={restaurant.descricao}
              tipo={restaurant.tipo}
            />
          ))}
        </List>
      </div>
    </CardContainer>
  )
}

export default RestaurantList
