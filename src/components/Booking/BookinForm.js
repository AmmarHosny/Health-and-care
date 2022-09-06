import React, { Fragment } from 'react'

const BookinForm = () => {
  return (
    <Fragment>
    <div className='main-booking'>
        <div className='booking'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
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
                </div>
            </div>
        </div>
        </div>
    </Fragment>
  )
}

export default BookinForm