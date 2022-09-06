import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot ,faIdBadge ,faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faSquareFacebook ,faSquareTwitter ,faSquareInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons'



const ContactUSForm = () => {
  return (
    <Fragment>
        <div className='contact-form'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 '>
                        <form>
                            <input type='text' placeholder='Your Name'/>
                            <input type='email' placeholder='Email'/>
                            <input type='text' placeholder='Phone Number'/>
                            <select name='book' id="book">
                                <option value="Zero">Selecty Department</option>
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>
                            <textarea></textarea>
                            <input type='submit' value='Submit'/>
                        </form>
                    </div>
                    <div className='col-lg-6 col-md-12 myform'>
                        <div className='information'>
                            <h2>Contact Us For Any Informations</h2>
                            <div>
                                <h3><FontAwesomeIcon icon={faMapLocationDot} />  Location</h3>
                                <hr/>
                                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                            </div>
                            <div className='email-phone'>
                                <h3><FontAwesomeIcon icon={faIdBadge} />  Email & Phone</h3>
                                <hr/>
                                <p>info@yourdomain.com(+68) 120034509</p>
                            </div>
                            <div className='follow'>
                                <h3> <FontAwesomeIcon icon={faGlobe} /> Follow Us</h3>
                                <hr/>
                                <ul className='brands'>
                                    <li><FontAwesomeIcon icon={faSquareFacebook}/></li>
                                    <li><FontAwesomeIcon icon={faSquareTwitter }/></li>
                                    <li><FontAwesomeIcon icon={faSquareInstagram} /></li>
                                    <li><FontAwesomeIcon icon={faLinkedin }/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ContactUSForm