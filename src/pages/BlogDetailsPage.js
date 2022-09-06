import React, { Fragment } from 'react'
import BlogDetails from '../components/BlogDetails/BlogDetails'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import NavBar from '../components/utilities/NavBar'

const BlogDetailsPage = () => {
  return (
    <Fragment>
      <NavBar/>
      <LandingPages NamePage="Blog Details"/>
      <BlogDetails/>
      <Footer/>
    </Fragment>
  )
}

export default BlogDetailsPage