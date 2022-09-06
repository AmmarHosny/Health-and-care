import React, { Fragment } from 'react'
import photo11 from '../../images/11.jpg'
import photo12 from '../../images/12.jpg'
import photo13 from '../../images/13.jpg'
import {faSquareTwitter ,faSquareInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const OurDoctors = () => {
    const data =
    [
        {imageDoctor:photo11 , nameDoctor:"Dr. Addition Smith" , major:"Dentist"},
        {imageDoctor:photo12 , nameDoctor:"Dr. Mahfuz Riad" , major:"Chiropractor"},
        {imageDoctor:photo13 , nameDoctor:"Dr. David Benjamin" , major:"Cardiologist"},
    ]
  return (
    <Fragment>
        <div className='our-doctors'>
            <div className='container'>
                <div className='main-text'>
                    <div>Our Doctor</div>
                    <h2>Meet Best Doctors</h2>
                </div>
                <div className='row'>
                    {data.map((e ,index)=>{
                        return(
                            <div className='col-lg-4 col-md-6' key={index}>
                                <div className='box-our-doctor'>
                                    <div className="box-img">
                                        <img src={e.imageDoctor} alt=""></img>
                                    </div>
                                    <h2>{e.nameDoctor}</h2>
                                    <h3>{e.major}</h3>
                                    <ul className='brands2'>
                                        <li><FontAwesomeIcon icon={faSquareTwitter }/></li>
                                        <li><FontAwesomeIcon icon={faSquareInstagram} /></li>
                                        <li><FontAwesomeIcon icon={faLinkedin }/></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default OurDoctors