import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone ,faEnvelopeOpen ,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import React, { Fragment } from 'react'

const Location = () => {

  return (
    <Fragment>
        <div className='location'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6  mb-3'>
                        <div className='box-location'>
                            <div className='bg-icon'>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <h3>Contact Number</h3>
                            <p>+001 123 456 790</p>
                            <p>+002 3424 44 00</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-3'>
                        <div className='box-location'>
                            <div className='bg-icon'>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                            </div>
                            <h3>Email Address</h3>
                            <p>info@yourdomain.com</p>
                            <p>example@support.com</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6  mb-3'>
                        <div className='box-location'>
                            <div className='bg-icon'>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <h3>Contact Number</h3>
                            <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Location