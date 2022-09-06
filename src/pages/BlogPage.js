import React, { Fragment } from 'react'
import Blog from '../components/Blogs/Blog'
import Footer from '../components/utilities/Footer'
import LandingPages from '../components/utilities/LandingPages'
import NavBar from '../components/utilities/NavBar'

const BlogPage = () => {
  return (
    <Fragment>
        <NavBar/>
        <LandingPages NamePage='Blog Grid 3'/>
        <Blog/>
        <Footer/>
    </Fragment>
  )
}

export default BlogPage