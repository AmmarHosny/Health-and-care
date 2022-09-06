import React, { Fragment } from 'react'
import OurTeam from '../components/OurTeam/OurTeam'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import NavBar from '../components/utilities/NavBar'

const OurTeamPage = () => {
  return (
    <Fragment>
        <NavBar/>
        <LandingPages NamePage="Our Team"/>
        <OurTeam/>
        <Footer/>
    </Fragment>
  )
}

export default OurTeamPage