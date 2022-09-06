import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'
import pic5 from '../../images/pic5.jpg'
import pic6 from '../../images/pic6.jpg'
import pic7 from '../../images/pic7.jpg'
import pic8 from '../../images/pic8.jpg'
import pic9 from '../../images/pic9.jpg'
import photo1 from '../../images/5.jpg'
import photo2 from '../../images/4.jpg'
import photo3 from '../../images/3.jpg'
import photo4 from '../../images/2.jpg'
import photo5 from '../../images/1.jpg'

const Blog = () => {

    const data=[
        {photo1:pic1 , photo2:photo1 ,icon:faCalendarDays ,nameDoctor:"John deo", date:"21 July 2021" , paragraph:"Dental Care for Women is very important" , mybutton:"Read More"},
        {photo1:pic2 , photo2:photo2 ,icon:faCalendarDays ,nameDoctor:"Peter Packer", date:"20 July 2021" , paragraph:"In this hospital there are special surgeon" , mybutton:"Read More"},
        {photo1:pic3 , photo2:photo3 ,icon:faCalendarDays ,nameDoctor:"Kalina", date:"19 July 2021" , paragraph:"Why Is Skin Surgeon Considered Underrated" , mybutton:"Read More"},
        {photo1:pic4 , photo2:photo4 ,icon:faCalendarDays ,nameDoctor:"John deo", date:"18 July 2021" , paragraph:"Understand Health Before You Regret" , mybutton:"Read More"},
        {photo1:pic5 , photo2:photo5 ,icon:faCalendarDays ,nameDoctor:"Sonar Moyna", date:"17 July 2021" , paragraph:"Health Will Be A Thing Of The Past And Here" , mybutton:"Read More"},
        {photo1:pic6 , photo2:photo1 ,icon:faCalendarDays ,nameDoctor:"Peter Packer", date:"16 July 2021" , paragraph:"Can you get a diflucan prescription online?" , mybutton:"Read More"},
        {photo1:pic7 , photo2:photo2 ,icon:faCalendarDays ,nameDoctor:"Michel", date:"15 July 2021" , paragraph:"Ten Gigantic Influences Of Health" , mybutton:"Read More"},
        {photo1:pic8 , photo2:photo3 ,icon:faCalendarDays ,nameDoctor:"Peter Packer", date:"14 July 2021" , paragraph:"Why Is Skin Surgeon Considered Underrated" , mybutton:"Read More"},
        {photo1:pic9 , photo2:photo4 ,icon:faCalendarDays ,nameDoctor:"Sonar Moyna", date:"13 July 2021" , paragraph:"Everyone need to go Dentist regularly" , mybutton:"Read More"},
    ]

  return (
    <Fragment>
        <div className='blog'>
            <div className='container'>
                <div className='row'>
                    {data.map((e , index)=>{
                        return(
                            <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
                                <div className='box-blog'>
                                    <div className='box-img'>
                                        <img src={e.photo1} alt=""></img>
                                    </div>
                                    <div className='date-doctor'>
                                        <div className='my-doctor'>
                                            <img src={e.photo2} alt=''></img>
                                            <span>{e.nameDoctor}</span>
                                        </div>
                                        <div className='my-date'>
                                            <FontAwesomeIcon icon={e.icon}/>
                                            <span>{e.date}</span>
                                        </div>
                                    </div>
                                    <h2>{e.paragraph}</h2>
                                    <button>{e.mybutton}</button>
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

export default Blog