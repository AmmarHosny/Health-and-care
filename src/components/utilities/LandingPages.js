import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import circle2 from '../../images/circle2.png'
import plus2 from '../../images/plus2.png'
import wave2 from '../../images/wave2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'

const LandingPages = ({NamePage}) => {
  return (
    <Fragment>
        <div className='landing-pages'>
            <div className='container'>
                <h1>{NamePage}</h1>
                <div className='button-pages'>
                    <Link to='/'><h4><FontAwesomeIcon icon={faHouse} /> Home</h4></Link>
                    <h4>/</h4>
                    <h4>{NamePage}</h4>
                </div>
            </div>
            <div className='shapes'>
                <img src={circle2} alt=''></img>
                <img src={plus2} alt=''></img>
                <img src={wave2} alt=''></img>
            </div>
        </div>
    </Fragment>
  )
}

export default LandingPages