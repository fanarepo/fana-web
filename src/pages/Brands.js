import Navbar from '../components/Navbar'
import './Brands.css'
import brandsIconUD from '../assets/brandsIconUD.png'
import brandsIconHighr from '../assets/brandsIconHighr.png'
import brandsIconFurniture from '../assets/brandsIconFurniture.png'
import brandsIconEyemed from '../assets/brandsIconEyemed.png'
import brandsIconTruefitt from '../assets/brandsIconTruefitt.png'
import brandsIconWatch from '../assets/brandsIconWatch.png'

export default function Brands() {

  return (
    <div>
        <Navbar/>
        <div className='brands'>
        <h1>Shop at these brands</h1>
        <h1>Get Money to donate</h1>
        <p>After making a purchase, these brands will reward you with money to donate through Fana!</p>
        <div className='grid'>
            <img src={brandsIconUD} />
            <img src={brandsIconHighr} />
            <img src={brandsIconFurniture} />
            <img src={brandsIconEyemed} />
            <img src={brandsIconTruefitt} />
            <img src={brandsIconWatch} />
        </div>
        </div>
    </div>
  )
}
