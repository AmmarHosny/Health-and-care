import React, { Fragment } from 'react'
import CircileDoctors from '../../images/CircileDoctors.png'
import photo1 from '../../images/1.jpg'
import photo2 from '../../images/2.jpg'
import photo3 from '../../images/3.jpg'
import photo4 from '../../images/4.jpg'
import photo5 from '../../images/5.jpg'
import photo6 from '../../images/6.jpg'
import {Swiper , SwiperSlide} from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft ,faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import Circle from '../../images/Circle.png'
import puls from '../../images/plus.png'
import Square from '../../images/Square.png'

const Testimonial = () => {
  return (
    <Fragment>
        <div className='testimonial'>
            <div className='container'>
                <div className='text-testimonial'>
                    <h3>Testimonial</h3>
                    <h2>See What Are The Patients <br/> Saying About us</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12  box-circle'>
                        <img src={CircileDoctors} alt='' className='main-photo'></img>
                        <ul>
                                <img src={photo1} alt=''></img>
                                <img src={photo2} alt=''></img>
                                <img src={photo3} alt=''></img>
                                <img src={photo4} alt=''></img>
                                <img src={photo5} alt=''></img>                           
                                <img src={photo6} alt=''></img>
                        </ul>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Swiper
                        
                            slidesPerView={1}
                            spaceBetween={30}
                        >
                            <SwiperSlide>
                                <div className='box-slide'>
                                    <FontAwesomeIcon icon={ faQuoteLeft} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida. </p>
                                    <div className='text-icons'>
                                        <div className='text-slide'>
                                            <h3>John Deo</h3>
                                            <h4>patient</h4>
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteRight}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='box-slide'>
                                    <FontAwesomeIcon icon={ faQuoteLeft} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida. </p>
                                    <div className='text-icons'>
                                        <div className='text-slide'>
                                            <h3>John Deo</h3>
                                            <h4>patient</h4>
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteRight}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='box-slide'>
                                    <FontAwesomeIcon icon={ faQuoteLeft} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida. </p>
                                    <div className='text-icons'>
                                        <div className='text-slide'>
                                            <h3>John Deo</h3>
                                            <h4>patient</h4>
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteRight}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='box-slide'>
                                    <FontAwesomeIcon icon={ faQuoteLeft} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida. </p>
                                    <div className='text-icons'>
                                        <div className='text-slide'>
                                            <h3>John Deo</h3>
                                            <h4>patient</h4>
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteRight}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='shapes-icons'>
                    <img src={Circle} alt=''></img>
                    <img src={puls} alt=''></img>
                    <img src={Square} alt=''></img>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Testimonial