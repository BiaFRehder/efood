import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trattoria from './pages/Trattoria'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/la-dolce-vitta-trattoria" element={<Trattoria />} />
    </Routes>
  )
}

export default Rotas
