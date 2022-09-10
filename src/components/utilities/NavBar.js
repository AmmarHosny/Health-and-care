import React, { Fragment, useState} from 'react'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus ,faMagnifyingGlass ,faAngleRight } from  "@fortawesome/free-solid-svg-icons"
import MainMenu from '../HomePage/MainMenu'
import DisplayWindow from './DispalyWindow'
import {Link} from 'react-router-dom'



const NavBar = () => {
    


    const [show ,setShow] = useState(false)

    const displaymenu = ()=>{
        setShow(true)
    }
    const displaynone = ()=>{
        setShow(false)
    }

    const [showserach ,setShowserach] = useState(false)

    const displayserach = ()=>{
        setShowserach(true)
    }
    const displayserachnone = ()=>{
        setShowserach(false)
    }
    
    
    return(
    <Fragment>
        <nav>
            <div className='container d-flex justify-content-between my-4 align-items-center'>
                <div className='logo'>
                    <img src={logo} alt=''></img>
                </div>
                <ul className='d-flex links'> 
                    <Link to='/'><li className='active'>Home</li></Link>
                    <li>Pages <FontAwesomeIcon icon={faPlus}/>
                        <ul className='menu1'>
                            <Link to='/about-us-page'><li>About Us</li></Link>
                            <Link to='/Our-Team'><li>Our Team</li></Link>
                            <Link to='/FAQ'><li>FAQ's</li></Link>
                            <Link to="/Booking"><li>Booking</li></Link>
                            <Link to='/Error'><li>Error 404</li></Link>
                            <Link to='/Login'><li>Login/Register</li></Link>
                        </ul>
                    </li>
                    <li >Services<FontAwesomeIcon icon={faPlus}/>
                        <ul className='menu2'>
                            <Link to='/Services'><li>Services</li></Link>
                            <Link to='/ServiceDetails'><li>Services Detali</li></Link>
                        </ul>
                    </li>
                    <li >Blog<FontAwesomeIcon icon={faPlus}/>
                        <ul className='menu2'>
                            <Link to='/Blog'><li>Blog</li></Link>
                            <Link to='/BlogDetails'><li>Blog Detali</li></Link>
                        </ul>
                    </li>
                    <Link to='/Contact-Us'><li >Contact US</li></Link>
                    <button className='search'><FontAwesomeIcon icon={faMagnifyingGlass} onClick={displayserach}/></button>
                    <button><Link to='/contact-us'>Contact Us </Link><FontAwesomeIcon icon={faAngleRight}/></button>
                    <div className='bars' onClick={displaymenu}>                    
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </ul>
            </div>
           
        </nav>
        {show?<MainMenu displaynone={displaynone}/>:null}
        {showserach?<DisplayWindow displayserachnone={displayserachnone}/> :null}
    </Fragment>
    )
}

export default NavBar