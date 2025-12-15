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

import fechar from '../../assets/images/close.png'
import { Restaurant } from '../../pages/Home'

export type Props = {
  cards: Restaurant['cardapio'][]
}

const MenuList = ({ cards = [] }: Props) => {
  return (
    <>
      <CardContainer>
        <div className="container">
          <List>
            {cards.map((item) => (
              <MenuCard
                key={item.id}
                foto={item.foto}
                nome={item.nome}
                descricao={item.descricao}
              />
            ))}
          </List>
        </div>
      </CardContainer>
      <Modal>
        <ModalContent className="container">
          <Close src={fechar} alt="Ícone de fechar" />
          {cards.map((item) => (
            <>
              <Image src={item.foto} alt={`Foto do prato ${item.nome}`} />
              <div>
                <Name>{item.nome}</Name>
                <Text>
                  {item.descricao}
                  <br />
                  <span>{`Serve: de ${item.porcao}`}</span>
                </Text>
                <Button>{`Adicionar ao carrinho - R$ ${item.preco}`}</Button>
              </div>
            </>
          ))}
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
export default MenuList
