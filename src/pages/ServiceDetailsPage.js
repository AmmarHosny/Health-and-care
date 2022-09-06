import React, { Fragment } from 'react'
import ServicDetails from '../components/Service Details/ServicDetails'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import NavBar from '../components/utilities/NavBar'

const ServiceDetailsPage = () => {
  return (
    <Fragment>
        <NavBar/>
        <LandingPages NamePage="Service Details"/>
        <ServicDetails/>
        <Footer/>
    </Fragment>
  )
}

export default ServiceDetailsPage