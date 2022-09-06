import React, { Fragment } from 'react'
import {AboutUs} from '../components/HomePage/AboutUs'
import Booking from '../components/HomePage/Booking'
import Landing from '../components/HomePage/Landing'
import LatestNews from '../components/HomePage/LatestNews'
import Services from '../components/HomePage/Services'
import Testimonial from '../components/HomePage/Testimonial'
import WorkingProcess from '../components/HomePage/WorkingProcess'
import Footer from '../components/utilities/Footer'
import NavBar from '../components/utilities/NavBar'



const Home = () => {
  return (
    <Fragment>
        <NavBar/>
        <Landing/>
        <AboutUs/>
        <WorkingProcess/>
        <Booking/>
        <Services/>
        <Testimonial/>
        <LatestNews/>
        <Footer/>
    </Fragment>
  )
}

export default Home