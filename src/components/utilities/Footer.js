import React, { Fragment } from 'react'
import logo from '../../images/logo.png'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareFacebook ,faSquareTwitter ,faSquareInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Fragment>
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 logo-side'>
                        <img src={logo} alt=""></img>
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className='contant-box'>
                            <FontAwesomeIcon icon={faPhone} />
                            <div className='phone-number'>
                                <h4>Contant Us</h4>
                                <h3>01111930731</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 link-side'>
                        <h2>Quick Links</h2>
                        
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Booking</li>
                            <li>Faq's</li>
                            <li>Blogs</li>
                            <li>Out Team</li>
                        </ul>
                    </div>
                    <div className='col-xl-3 link-side'>
                        <h2>Our Service</h2>
                        
                        <ul>
                            <li>Dental Care</li>
                            <li>Cardiac Clinic</li>
                            <li>Massege Therapy</li>
                            <li>Cardiology</li>
                            <li>Precise Diagnosis</li>
                            <li>Abmbulance Services</li>
                        </ul>
                    </div>
                    <div className='col-xl-3 link-side'>
                        <h2>Subcribe</h2>
                        <input type="text" placeholder='Email Address' className='one'/>
                        <input type='submit' value='Subcribe Now' className='two'/>
                        <ul className='brands'>
                            <li><FontAwesomeIcon icon={faSquareFacebook}/></li>
                            <li><FontAwesomeIcon icon={faSquareTwitter }/></li>
                            <li><FontAwesomeIcon icon={faSquareInstagram} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin }/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
  )
}

export default Footer