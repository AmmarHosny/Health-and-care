import React, { Fragment } from 'react'
import Servicess from '../components/Services/Servicess'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import NavBar from '../components/utilities/NavBar'

const ServicesPage = () => {
  return (
    <Fragment>
        <NavBar/>
        <LandingPages NamePage="Services"/>
        <Servicess/>
        <Footer/>
    </Fragment>
  )
}

export default ServicesPage