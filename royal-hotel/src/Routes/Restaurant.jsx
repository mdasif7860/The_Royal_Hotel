import React from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import Menu from '../Components/Menu'
import MainMenu from '../Components/MainMenu'

const Restaurant = () => {
  document.title = "The Royal Hotel - Restaurant"
  return (
    <>
    <RestaurantCard />
    <Menu />
    <MainMenu />
    </>
  )
}

export default Restaurant