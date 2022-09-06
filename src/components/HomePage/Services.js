import React, { Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFieldUn ,faBed ,faSquareH ,faSyringe} from '@fortawesome/free-solid-svg-icons'

const Services = () => {

    const data=[
        {icon:faTruckFieldUn , name:"vaccine" ,paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis.",mybuttom:"View More"},
        {icon:faBed , name:"Emergency" ,paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis.",mybuttom:"View More"},
        {icon:faSquareH , name:"Diagnostics" ,paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis.",mybuttom:"View More"},
        {icon:faSyringe , name:"Treatment" ,paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis.",mybuttom:"View More"},
    ]
    var settings = {
        dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Fragment>
        <div className='services'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-7'>
                        <div className='text-services'>
                            <h4>Services</h4>
                            <h2>We Cover A Big Variety Of Medical Services</h2>
                            <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                            <button>All Services</button>
                        </div>
                    </div>
                    <div className='col-xl-8 swiper-box'>
                        <Slider {...settings}>
                            {data.map((item , index)=>{
                                return(
                                <div className='box-services1' key={index}>
                                    <div className='icons'><FontAwesomeIcon icon={item.icon}/></div>
                                    <h3>{item.name}</h3>
                                    <p>{item.paragraph}</p>
                                    <button>{item.mybuttom}</button>
                                </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Services