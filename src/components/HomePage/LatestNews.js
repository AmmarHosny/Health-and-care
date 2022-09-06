import React, { Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'
import pic5 from '../../images/pic5.jpg'
import photo5 from '../../images/5.jpg'
import photo4 from '../../images/4.jpg'
import photo3 from '../../images/3.jpg'
import photo2 from '../../images/2.jpg'
import photo1 from '../../images/1.jpg'


const LatestNews = () => {
    const data=[
        {Bimg:pic1 , Simg:photo1 , nameDoctor:"Michel" , date:"17 July 2021" ,paragraph:"Health Will Be A Thing Of The Past And Here's Why" ,mybuttom:"Read More"},
        {Bimg:pic2 , Simg:photo2 , nameDoctor:"John deo" , date:"18 July 2021" ,paragraph:"In this hospital there are special surgeon" ,mybuttom:"Read More"},
        {Bimg:pic3 , Simg:photo3 , nameDoctor:"Peter Packer" , date:"19 July 2021" ,paragraph:"Can you get a diflucan prescription online?" ,mybuttom:"Read More"},
        {Bimg:pic4 , Simg:photo4 , nameDoctor:"Sonar Moyna" , date:"20 July 2021" ,paragraph:"Why Is Skin Surgeon Considered Underrated" ,mybuttom:"Read More"},
        {Bimg:pic5 , Simg:photo5 , nameDoctor:"Kalina Mollika" , date:"21 July 2021" ,paragraph:"Dental Care for Women is very important" ,mybuttom:"Read More"},
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
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
  return (
    <Fragment>
        <div className='latest-news'>
            <div className='container'>
                <div className='text-news'>
                    <h3>Latest News</h3>
                    <h2>Our Latest News</h2>
                </div>
                <Slider {...settings}>
                    {data.map((item ,index)=>{
                        return(
                        
                            <div className='container-slide' key={index}>
                                <img src={item.Bimg} alt='' className='main-photo'></img>
                                <div className='clander'>
                                    <img src={item.Simg} alt=''></img>
                                    <span>{item.nameDoctor}</span>
                                    <span>{item.date}</span>
                                </div>
                                <h2>{item.paragraph}</h2>
                                <button>{item.mybuttom}</button>
                            </div>
                        
                        )
                    })}
                </Slider>
            </div>
        </div>
    </Fragment>
  )
}

export default LatestNews