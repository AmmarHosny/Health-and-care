import React, { Fragment } from 'react'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import LatestNews from '../components/HomePage/LatestNews'
import Questions from '../components/Faqspage/Questions'
import NavBar from '../components/utilities/NavBar'

const FQA = () => {
  return (
    <Fragment>
        <NavBar/>
        <LandingPages NamePage="FAQ's"/>
        <Questions/>
        <LatestNews/>
        <Footer/>
    </Fragment>
  )
}

export default FQA