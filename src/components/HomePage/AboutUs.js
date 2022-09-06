import React, { Fragment } from 'react'
import photo2 from '../../images/photo2.jpg'
import photo3 from '../../images/photo3.jpg'
import photo4 from '../../images/photo4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFieldUn ,faBed ,faSquareH ,faSyringe} from '@fortawesome/free-solid-svg-icons'
import Waves from  '../../images/Waves.png'
import Circles from '../../images/Circles.png'
import bigSquare from '../../images/bigSquare.png'
import Square from '../../images/Square.png'

export const AboutUs = () => {
  return (
    <Fragment>
        <div className='about-us'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <ul>
                            <img src={photo3} alt=''></img>
                            <img src={photo2} alt=''></img>
                            <img src={photo4} alt=''></img>
                            <div className='number-years'>
                                <div className='number'>20</div>
                                <div className='years'>Years Experience</div>
                            </div>
                        </ul>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <h4>About Us</h4>
                        <h1>The Great Place Of Medical Hospital Center</h1>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                        <div className='box'>
                            <div className='box-one'>
                                <ul>
                                    <li>
                                        <div>
                                        <FontAwesomeIcon icon={faTruckFieldUn}/>
                                        </div>
                                        <span>Emergency <br/> Help</span>
                                    </li>
                                    <li>
                                        <div><FontAwesomeIcon icon={faBed}/></div>
                                        <span>Qualified <br/> Doctors</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='box-two'>
                                <ul>
                                    <li>
                                        <div><FontAwesomeIcon icon={faSquareH}/></div>
                                        <span>Best <br/> Professional</span>
                                    </li>
                                    <li>
                                        <div><FontAwesomeIcon icon={faSyringe}/></div>
                                        <span>Medical <br/> Treatment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shapes-about-us'>
                    <img src={Waves} alt=""></img>
                    <img src={Circles} alt=""></img>
                    <img src={bigSquare} alt=""></img>
                    <img src={Square} alt=""></img>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
