import React, { Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import Home from './pages/Home'
import {Route ,Routes} from "react-router-dom"
import AboutUsPage from './pages/AboutUspage';
import OurTeamPage from './pages/OurTeamPage';
import FQA from './pages/FQA\'s';
import BookingPage from './pages/BookingPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ScrollButton from './components/utilities/ScrollButton';
import ScrollTOTopPage from './components/utilities/ScrollTOTopPage';



const App = () => {
  return (
    <Fragment>
        <ScrollTOTopPage/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/Health-and-care'  element={<Home/>}/>
          <Route path='/about-us-page' element={<AboutUsPage/>}/>
          <Route path='/Our-Team' element={<OurTeamPage/>}/>
          <Route path='/FAQ' element={<FQA/>}/>
          <Route path='/Booking' element={<BookingPage/>}/>
          <Route path='/Error' element={<ErrorPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/Services' element={<ServicesPage/>}/>
          <Route path='/Blog' element={<BlogPage/>}/>
          <Route path='/Contact-Us' element={<ContactUsPage/>}/>
          <Route path='/ServiceDetails' element={<ServiceDetailsPage/>}/> 
          <Route path='/BlogDetails' element={<BlogDetailsPage/>}/> 
        </Routes>
        <ScrollButton/>
    </Fragment>
  )
}

export default App