import React, { Fragment } from 'react'
import mobile from '../../images/mobile.png'
import women from '../../images/women.png'
import love from '../../images/love.png'
import like from '../../images/heart.png'
import gire from '../../images/Gire.png'
import loction from '../../images/loction.png'


const Booking = () => {
  return (
    <Fragment>
        <div className='booking'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='booking-card'>
                            <h2>Book Appointment</h2>
                            <form>
                                <select name='book' id="book">
                                    <option value="Zero">Selecty Department</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select>
                                <br/>
                                <select name='book' id="book">
                                    <option value="Zero">select Doctor</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select>
                                <br/>
                                <input type="text" placeholder='Your Name'/>
                                <br/>
                                <input type='number' placeholder='Phone Number'/>
                                <br/>
                                <input type= 'text' value='dd/mm/yyyy'/>
                                <br/>
                                <input type='submit' value='Appointment Now'/>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 box'>
                        <div className='mobile-box'>
                            <img src={mobile} alt=''></img>
                            <img src={women} alt=''></img>
                            
                        </div>
                        <div className='icons-mobile'>
                                <img src={love} alt=''></img>
                                <img src={like} alt=''></img>
                                <img src={loction} alt=''></img>
                                <img src={gire} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Booking