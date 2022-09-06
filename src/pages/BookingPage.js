import React, { Fragment } from 'react'
import BookinForm from '../components/Booking/BookinForm'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import NavBar from '../components/utilities/NavBar'


const BookingPage = () => {
  return (
    <Fragment>
    <NavBar/>
    <LandingPages NamePage='Booking'/>
    <BookinForm/>
    <Footer/>
    </Fragment>
  )
}

export default BookingPage