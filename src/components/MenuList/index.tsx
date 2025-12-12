import ContentCard from '../../models/ContentCard'
import MenuCard from '../MenuCard'

import { CardContainer } from '../../styles'
import {
  Close,
  List,
  ModalContent,
  Image,
  Name,
  Text,
  Button,
  Modal
} from './styles'

import pizza from '../../assets/images/pizza.png'
import fechar from '../../assets/images/close.png'

type Props = {
  cards: ContentCard[]
}

const MenuList = ({ cards }: Props) => {
  return (
    <>
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
      <Modal>
        <ModalContent className="container">
          <Close src={fechar} alt="" />
          <Image src={pizza} alt="" />
          <div>
            <Name>Pizza Marguerita</Name>
            <Text>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <span>Serve: de 2 a 3 pessoas</span>
            </Text>
            <Button>Adicionar ao carrinho - R$ 60,90</Button>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
export default MenuList
