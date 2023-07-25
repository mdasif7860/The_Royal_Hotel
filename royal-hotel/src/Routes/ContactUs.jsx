import React from 'react'
import ContactCard from '../Components/ContactCard'
import ContactPage from '../Components/ContactPage'

const ContactUs = () => {
  document.title = "The Royal Hotel - Contact Us"
  return (
    <>
   <ContactCard />
   <ContactPage />
    </>
  )
}

export default ContactUs