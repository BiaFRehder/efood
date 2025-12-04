import italiana from '../../assets/images/italiana.png'
import { BannerContainer } from './styles'

const Banner = () => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${italiana})` }}>
      <div className="container">
        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </BannerContainer>
  )
}

export default Banner
