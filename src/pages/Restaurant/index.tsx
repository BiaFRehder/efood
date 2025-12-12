import { useParams } from 'react-router-dom'
import ContentCard from '../../models/ContentCard'

import pizza from '../../assets/images/pizza.png'

import Footer from '../../components/Footer'
import MenuList from '../../components/MenuList'
import HeaderRestaurant from '../../components/HeaderRestaurant'

const menu: ContentCard[] = [
  {
    id: 1,
    variant: 'menu',
    image: pizza,
    altImage: 'Foto de comida japonesa',
    name: 'Pizza Marguerita',
    rating: '4.9',
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    variant: 'menu',
    image: pizza,
    altImage: 'Foto de comida japonesa',
    name: 'Pizza Marguerita',
    rating: '4.9',
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    variant: 'menu',
    image: pizza,
    altImage: 'Foto de comida japonesa',
    name: 'Pizza Marguerita',
    rating: '4.9',
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    variant: 'menu',
    image: pizza,
    altImage: 'Foto de comida japonesa',
    name: 'Pizza Marguerita',
    rating: '4.9',
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    variant: 'menu',
    image: pizza,
    altImage: 'Foto de comida japonesa',
    name: 'Pizza Marguerita',
    rating: '4.9',
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    variant: 'menu',
    image: pizza,
    altImage: 'Foto de comida japonesa',
    name: 'Pizza Marguerita',
    rating: '4.9',
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Restaurant = () => {
  const { id } = useParams()

  return (
    <>
      <HeaderRestaurant />
      <MenuList cards={menu} />
      <Footer />
    </>
  )
}

export default Restaurant
