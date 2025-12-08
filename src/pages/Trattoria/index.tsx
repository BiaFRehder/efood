import ContentCard from '../../models/ContentCard'
import CardList from '../../components/CardList'
import Header from '../../components/Header'

import pizza from '../../assets/images/pizza.png'
import Footer from '../../components/Footer'

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

const Home = () => {
  return (
    <>
      <Header page="trattoria" />
      <CardList cards={menu} variant="menu" />
      <Footer />
    </>
  )
}

export default Home
