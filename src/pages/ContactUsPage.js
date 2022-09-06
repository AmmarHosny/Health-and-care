import React, { Fragment } from 'react'
import ContactUSForm from '../components/ContactUs/ContactUSForm'
import Location from '../components/ContactUs/Location'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import NavBar from '../components/utilities/NavBar'

const ContactUsPage = () => {
  return (
    <Fragment>
        <NavBar/>
        <LandingPages NamePage='Contact Us'/>   
        <ContactUSForm/>
        <Location/>
        <Footer/>
    </Fragment>
  )
}

export default ContactUsPage