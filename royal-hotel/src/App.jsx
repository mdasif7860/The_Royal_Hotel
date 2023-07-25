import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Routes/Home"
import Rooms from "./Routes/Rooms"
import Restaurant from "./Routes/Restaurant"
import Hall from "./Routes/Hall"
import ContactUs from "./Routes/ContactUs"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/restaurant' element={<Restaurant />} />
        <Route path='/hall' element={<Hall />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App