import ContentCard from '../../models/ContentCard'
import MenuCard from '../MenuCard'

import { CardContainer } from '../../styles'
import { List } from './styles'

type Props = {
  cards: ContentCard[]
}

const MenuList = ({ cards }: Props) => {
  return (
    <CardContainer>
      <div className="container">
        <List>
          {cards.map((ContentCard) => (
            <MenuCard
              key={ContentCard.id}
              foto={ContentCard.image}
              nome={ContentCard.name}
              descricao={ContentCard.description}
            />
          ))}
        </List>
      </div>
    </CardContainer>
  )
}
export default MenuList
