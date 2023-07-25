import React from 'react'
import RoomCard from "../Components/RoomCard"
import RoomSection from "../Components/RoomSection"

const Rooms = () => {
  document.title = "The Royal Hotel - Rooms"
  return (
    <>
    <RoomCard />
    <RoomSection />
    </>
  )
}

export default Rooms