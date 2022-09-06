import React, { Fragment, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus , faXmark} from  "@fortawesome/free-solid-svg-icons"
import logo1 from '../../images/logo1.png'
import {Link} from 'react-router-dom'

const MainMenu = ({displaynone}) => {

    const openPages = useRef()
    const openServices = useRef()
    const openBlogs = useRef()
   

    const clickPages = ()=>{
        return(
            openPages.current.classList.toggle('open')
        )
    } 
    const clickServices = ()=>{
        return(
            openServices.current.classList.toggle('open')
        )
    } 
    const clickBlogs = ()=>{
        return(
            openBlogs.current.classList.toggle('open')
        )
    } 

  return (
    <Fragment>
            <div className='mainmenu'>
                <div className='container'>
                    <FontAwesomeIcon icon={faXmark} onClick={displaynone}/>
                    <div className='logo'>
                        <img src={logo1} alt=""></img>
                    </div>
                    <ul className='links-menu'>
                        <Link to='/'><li>Home</li></Link>
                        <li >Pages <FontAwesomeIcon icon={faPlus} onClick={clickPages}/>
                                <ul className='' ref={openPages}>
                                <Link to='/about-us-page'> <li>About Us</li></Link>
                                <Link to='/Our-Team'><li>Our Team</li></Link>
                                <Link to='/FAQ'><li>FAQ's</li></Link>
                                <Link to="/Booking"><li>Booking</li></Link>
                                <Link to='/Error'><li>Error 404</li></Link>
                                <Link to='/Login'><li>Login/Register</li></Link>
                                </ul>
                        </li>
                        <li>Services <FontAwesomeIcon icon={faPlus} onClick={clickServices}/>
                            
                            <ul ref={openServices}>
                                <Link to='/Services'><li>Services</li></Link>
                                <Link to='/ServiceDetails'><li>Services Detali</li></Link>
                            </ul>
                        </li>
                        <li className='show'>Blog<FontAwesomeIcon icon={faPlus} onClick={clickBlogs}/>
                            <ul ref={openBlogs}>
                                <Link to='/Blog'><li>Blog</li></Link>
                                <Link to='/BlogDetails'><li>Blog Detali</li></Link>
                            </ul>
                        </li>
                        <li><Link to='/contact-us'>Contact Us </Link></li>
                    </ul>
                </div>
            </div>
    </Fragment>
  )
  
}

export default MainMenu