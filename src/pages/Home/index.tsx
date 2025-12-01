import Restaurant from '../../models/Restaurant'
import CardList from '../../components/CardList'
import Header from '../../components/Header'

import japonesa from '../../assets/images/japonesa.png'
import italiana from '../../assets/images/italiana.png'
import Footer from '../../components/Footer'

const resturants: Restaurant[] = [
  {
    id: 1,
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
      <Header />
      <CardList restaurants={resturants} />
      <Footer />
    </>
  )
}

export default Home
