import React from 'react'
import Slider from '../Components/Slider'
import AboutHotel from '../Components/AboutHotel'
import Facilities from '../Components/Facilities'
import Testimonials from '../Components/Testimonials'
const Home = () => {
  document.title = "The Royal Hotel"
  return (
    <div>
    <Slider />
    <AboutHotel />
    <Facilities />
   <Testimonials />
    </div>
  )
}

export default Home