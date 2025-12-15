import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import HeaderHome from '../../components/HeaderHome'

export type Restaurant = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <HeaderHome />
      <RestaurantList cards={restaurants} />
      <Footer />
    </>
  )
}

export default Home
