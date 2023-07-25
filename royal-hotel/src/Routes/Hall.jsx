import React from 'react'
import HallCard from '../Components/HallCard'
import HallAbout from '../Components/HallAbout'

const Hall = () => {
  document.title = "The Royal Hotel - Marriage & Reception Hall"
  return (
   <>
   <HallCard />
   <HallAbout />
   </>
  )
}

export default Hall