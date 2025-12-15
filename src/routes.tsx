import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageRestaurant from './pages/PageRestaurant'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes/:id" element={<PageRestaurant />} />
    </Routes>
  )
}

export default Rotas
