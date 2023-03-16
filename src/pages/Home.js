import Navbar from '../components/Navbar';
import './Home.css'
import bannerAnimals from '../assets/bannerAnimals.png'
import bannerEducation from '../assets/bannerEducation.png'
import bannerEnvironment from '../assets/bannerEnvironment.png'
import bannerFeatured from '../assets/bannerFeatured.png'
import bannerPeople from '../assets/bannerPeople.png'
import homeAnimalsIcon from '../assets/homeAnimalsIcon.png'
import homeEnvironmentIcon from '../assets/homeEnvironmentIcon.png'
import homePeopleIcon from '../assets/homePeopleIcon.png'
import homeEducationIcon from '../assets/homeEducationIcon.png'
import homeFeaturedIcon from '../assets/homeFeaturedIcon.png'
import { useState } from 'react';
import bannerTusk from '../assets/bannerTusk.png'



const header = {
  class1: {
    title: "Animals",
    content: "From Africa to Antartica, animal charities work to support wildlife, their habitats, and the local people",
    banner: bannerAnimals
  },
  class2: {
    title: "Environment",
    content: "Some text about the environment and what our charities do",
    banner: bannerEnvironment
  },
  class3: {
    title: "People",
    content: "Some text about people focused charities and what they do",
    banner: bannerPeople
  },
  class4: {
    title: "Education",
    content: "Some text around what our charities do in education",
    banner: bannerEducation
  },
  class5: {
    title: "Featured",
    content: "This is going to be the main promo for current campaigns",
    banner: bannerFeatured
  }
};


export default function Home() {

  const [selection, setSelection] = useState('class1')


  console.log(selection)

  return (
    <div className='home'>
     <Navbar/>
    <img src={header[selection].banner} />
    <h1>{header[selection].title}</h1>
    <p>{header[selection].content}</p>
    
    <div className='selector'>
      <div>
        <img src={homeAnimalsIcon} 
        onClick={(e) => setSelection('class1')}
        />
        <p>Animals</p>
      </div>
      <div>
      <img src={homeEnvironmentIcon} 
      onClick={(e) => setSelection('class2')}
      />
        <p>Environment</p>
      </div>
      <div>
      <img src={homePeopleIcon} 
      onClick={(e) => setSelection('class3')}
      />
        <p>People</p>
      </div>
      <div>
      <img src={homeEducationIcon} 
      onClick={(e) => setSelection('class4')}
      />
        <p>Education</p>
      </div>
      <div>
      <img src={homeFeaturedIcon} 
      onClick={(e) => setSelection('class5')}
      />
        <p>Featured</p>
      </div>
    </div>

    <div className='feed'> 
      <img src={bannerTusk} />
      <h1>Tusk</h1>
    </div>

    </div>
  );
}


