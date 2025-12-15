import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import MenuList from '../../components/MenuList'
import HeaderRestaurant from '../../components/HeaderRestaurant'
import { Restaurant } from '../Home'

const PageRestaurant = () => {
  const { id } = useParams()

  const [data, setData] = useState<Restaurant['cardapio'][]>([])
  const [restaurants, setRestaurants] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res)
        setData(res.cardapio)
      })
  }, [id])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRestaurant banner={restaurants} />
      <MenuList cards={data} />
      <Footer />
    </>
  )
}

export default PageRestaurant
