import React, { Fragment } from 'react'
import NotFound from '../components/Error/NotFound'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import NavBar from '../components/utilities/NavBar'

const ErrorPage = () => {
  return (
    <Fragment>
        <NavBar/>
        <LandingPages NamePage='Page Not Found'/>
        <NotFound/>
        <Footer/>
    </Fragment>
  )
}

export default ErrorPage