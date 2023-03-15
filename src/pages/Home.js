import Navbar from '../components/Navbar';
import './Home.css'
import bannerAnimals from '../assets/bannerAnimals.png'


export default function Home() {
  return (
    <div className='home'>
     <Navbar/>
    <img src={bannerAnimals} />
    <h1>Animals</h1>
    <p>From Africa to Antartica, animal charities work to support wildlife, their habitats, and the local people</p>
    </div>
  );
}


