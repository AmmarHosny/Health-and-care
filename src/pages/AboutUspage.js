import React, { Fragment } from 'react'
import OurDoctors from '../components/AboutUsPage/OurDoctors'
import Statistics from '../components/AboutUsPage/Statistics'
import Testimonial from '../components/HomePage/Testimonial'
import LatestNews from '../components/HomePage/LatestNews'
import Footer from '../components/utilities/Footer'
import NavBar from '../components/utilities/NavBar'
import LandingPages from '../components/utilities/LandingPages'
import { AboutUs } from '../components/HomePage/AboutUs'

const MainAboutUs = () => {
  return (
    <Fragment>
        <NavBar/>
        <LandingPages NamePage='About Us'/>
        <AboutUs/>
        <Statistics/>
        <OurDoctors/>
        <Testimonial/>
        <LatestNews/>
        <Footer/>
    </Fragment>
  )
}

export default MainAboutUs