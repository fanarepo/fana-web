import './Tutorial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import tutorial1 from '../assets/tutorial1.png'
import tutorial2 from '../assets/tutorial2.png'
import tutorial3 from '../assets/tutorial3.png'
import { Link } from 'react-router-dom'



export default function Tutorial() {


  return (
    <>
        <Swiper pagination={true} modules={[Pagination]} className='mySwiper' >
        <SwiperSlide>
            <img src={tutorial1}/>
            <h1>Make Your Difference</h1>
            <p>Earn Donation rewards,</p>
            <p>choose where to give,</p>
            <p>and track your progress.</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={tutorial2}/>
            <h1>Donation Rewards</h1>
            <p>Shop at Partner Brands &</p>
            <p>get money to donate.</p>
            <p>Or top up on your own!</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={tutorial3}/>
            <h1>Choose a Cause</h1>
            <p>It's your donation, so you</p>
            <p>choose where to give to!</p>
            <p>We only partner with high</p>
            <p>impact, trusted charities.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Let's get you started</h1>
          <div className='start'>
          <p>Sign up to start your journey:</p>
          <Link to="/signup" className='btn'>Signup</Link>
          <p>Login if you are already a member:</p>
          <Link to="/login" className='btn'>Login</Link>
          </div>
        </SwiperSlide>
        </Swiper>
    </>
  )
}


