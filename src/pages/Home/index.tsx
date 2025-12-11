import ContentCard from '../../models/ContentCard'

import japonesa from '../../assets/images/japonesa.png'
import italiana from '../../assets/images/italiana.png'

import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import HeaderHome from '../../components/HeaderHome'

const resturants: ContentCard[] = [
  {
    id: 1,
    variant: 'restaurant',
    image: japonesa,
    altImage: 'Foto de comida japonesa',
    name: 'Hioki Sushi',
    rating: '4.9',
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    variant: 'restaurant',
    image: italiana,
    altImage: 'Foto de comida italiana',
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    variant: 'restaurant',
    image: japonesa,
    altImage: 'Foto de comida japonesa',
    name: 'Hioki Sushi',
    rating: '4.9',
    category: ['Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 4,
    variant: 'restaurant',
    image: italiana,
    altImage: 'Foto de comida italiana',
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    variant: 'restaurant',
    image: japonesa,
    altImage: 'Foto de comida japonesa',
    name: 'Hioki Sushi',
    rating: '4.9',
    category: ['Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 6,
    variant: 'restaurant',
    image: italiana,
    altImage: 'Foto de comida italiana',
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => {
  return (
    <>
      <HeaderHome />
      <RestaurantList cards={resturants} />
      <Footer />
    </>
  )
}

export default Home
