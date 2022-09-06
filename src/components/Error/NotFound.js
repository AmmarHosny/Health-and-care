import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <Fragment>
        <div className='error'>
            <div className='container'>
                <div className='number-error'>
                4<span></span>4
                </div>
                <h2>The Page you were looking for, <br/> couldn't be found.</h2>
                <p>The page you are looking for might have been removed, had its <br/> name changed, or is temporarily unavailable.</p>
                <div className='buttons'>
                    <Link to='/'> <button>Back</button></Link>
                    <Link to='/'><button>Back To Home</button></Link>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default NotFound