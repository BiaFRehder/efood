import Restaurant from '../../models/Restaurant'
import CardList from '../../components/CardList'
import Header from '../../components/Header'

import pizza from '../../assets/images/pizza.png'
import Footer from '../../components/Footer'

const resturants: Restaurant[] = [
  {
    id: 1,
    type: 'menu',
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
    type: 'menu',
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
    type: 'menu',
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
    type: 'menu',
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
    type: 'menu',
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
    type: 'menu',
    image: pizza,
    altImage: 'Foto de comida japonesa',
    name: 'Pizza Marguerita',
    rating: '4.9',
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Home = () => {
  return (
    <>
      <Header page="trattoria" />
      <CardList restaurants={resturants} />
      <Footer />
    </>
  )
}

export default Home
