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
import { useState } from 'react'

export type Props = {
  cards: Restaurant['cardapio'][]
}

interface ModalState {
  isVisible: boolean
  item: Restaurant['cardapio'] | null
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuList = ({ cards = [] }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    item: null
  })

  const closeModal = () => {
    setModal({ isVisible: false, item: null })
  }

  return (
    <>
      <CardContainer>
        <div className="container">
          <List>
            {cards.map((item) => (
              <div key={item.id}>
                <MenuCard
                  key={item.id}
                  foto={item.foto}
                  nome={item.nome}
                  descricao={item.descricao}
                  onClick={() => {
                    setModal({ isVisible: true, item })
                  }}
                />
              </div>
            ))}
          </List>
        </div>
      </CardContainer>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <Close
            onClick={() => {
              closeModal()
            }}
            src={fechar}
            alt="Ícone de fechar"
          />
          <Image
            src={modal.item?.foto}
            alt={`Foto do prato ${modal.item?.nome}`}
          />
          <div>
            <Name>{modal.item?.nome}</Name>
            <Text>
              {modal.item?.descricao}
              <span>{`Serve: de ${modal.item?.porcao}`}</span>
            </Text>
            <Button>{`Adicionar ao carrinho - ${formataPreco(modal.item?.preco)}`}</Button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}
export default MenuList
