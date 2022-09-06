import React, { Fragment } from 'react'
import pic9 from '../../images/pic9.jpg'
import photo from '../../images/3.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays ,faQuoteLeft ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faSquareFacebook ,faSquareTwitter ,faSquareInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import photo1 from '../../images/12.jpg'
import photo2 from '../../images/14.jpg' 
import photo3 from '../../images/6.jpg'
import photo4 from '../../images/pic2.jpg'
import photo5 from '../../images/pic3.jpg'
import photo6 from '../../images/pic4.jpg'
import photo7 from '../../images/pic1.jpg'
import photo8 from '../../images/pic5.jpg'
import photo9 from '../../images/pic6.jpg'

const BlogDetails = () => {

    const data = [
        {photo:photo3 , nameDoctor:"George" ,date:"MAY 09, 2021 AT 10:45 AM" , paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." ,replybutton:"REPLY"},
        {photo:photo2 , nameDoctor:"Falikaz" ,date:"MAY 09, 2021 AT 10:45 AM" , paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." ,replybutton:"REPLY" ,widthd:"35px"},
        {photo:photo3 , nameDoctor:"Sonar" ,date:"MAY 09, 2021 AT 10:45 AM" , paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." ,replybutton:"REPLY"},
        {photo:photo2 , nameDoctor:"Michel" ,date:"MAY 09, 2021 AT 10:45 AM" , paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." ,replybutton:"REPLY"},
    ]

    const data2 = [
        {photo:photo4 , text:"Precious Tips To Help You Get Better." , date:"21 July 2021" , icon:faCalendarDays},
        {photo:photo5 , text:"Ten Doubts You Should Clarify About." , date:"20 July 2021" , icon:faCalendarDays},
        {photo:photo6 , text:"The 10 Steps Needed For Putting." , date:"19 July 2021" , icon:faCalendarDays},
    ]
  return (
    <Fragment>
        <div className='blog-details'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-8 col-lg-7'>
                        <img src={pic9} alt=''></img>
                        <div className='text-blog-detalis'>
                            <div className='clander'>
                                <img src={photo} alt=''></img>
                                <span>Sonar Moyna</span>
                                <span><FontAwesomeIcon icon={faCalendarDays} /> 19 July 2021</span>
                            </div>
                            <h2>Precious Tips To Help You Get Better.</h2>
                            <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
                            <div className='box-comment'>
                                <div className='quote-icon'><FontAwesomeIcon icon={faQuoteLeft} /></div>
                                <p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.</p>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className='row box-photos'>
                                <div className='col-lg-6'>
                                    <img src={photo1} alt=''></img>
                                </div>
                                <div className='col-lg-6'>
                                    <img src={photo2} alt=''></img>
                                </div>
                            </div>
                            <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <div className='tags'>
                                <div className='tag'>Tags:<span>Health  Growth  Life</span></div>
                                <div className='share'>share:
                                    <span className='icons'>
                                        <li><FontAwesomeIcon icon={faSquareFacebook}/></li>
                                        <li><FontAwesomeIcon icon={faSquareTwitter}/></li>
                                        <li><FontAwesomeIcon icon={faSquareInstagram} /></li>
                                        <li><FontAwesomeIcon icon={faLinkedin}/></li>
                                    </span>
                                </div>
                            </div>
                            <div className='box-Sonar'>
                                <div className='photo-sonar'>
                                    <img src={photo1} alt=''></img>
                                </div>
                                <div className='text-sonar'>
                                    <h4>Sonar Z. Moyna</h4>
                                    <p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
                                    <div className='brands3'>
                                        <li><FontAwesomeIcon icon={faSquareFacebook}/></li>
                                        <li><FontAwesomeIcon icon={faSquareTwitter}/></li>
                                        <li><FontAwesomeIcon icon={faSquareInstagram} /></li>
                                        <li><FontAwesomeIcon icon={faLinkedin}/></li>
                                    </div>
                                </div>
                            </div>
                            <div className='box-8comment'>
                                <h4>8 comment</h4>
                                {data.map((item , index)=>{
                                return (
                                    <div className='box-george' style={{marginLeft:item.widthd}} key={index}>
                                    <div className='text-george'>
                                        <div className='photo-george'>
                                            <img src={item.photo} alt=''></img>
                                            <div className='date-george'>
                                                <h6>{item.nameDoctor}</h6>
                                                <h5>{item.date}</h5>
                                            </div>
                                        </div>
                                        <p>{item.paragraph}</p>
                                        <button>{item.replybutton}</button>
                                    </div>
                                </div>
                                )
                            })}
                            </div>
                            <div className='box-reply'>
                                <h3>Leave a Reply</h3>
                                <form>
                                    <div className='input-reply'>
                                        <input type='text' placeholder='Author'/>
                                        <input type='email' placeholder='Email'/>
                                    </div>
                                    <textarea placeholder='Comment'></textarea>
                                    <input type='submit' value='Submit Comment'/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-5'>
                        <div className='box-sticky'>
                            <div className='box-search'>
                                <input placeholder='Enter Your Keyword...' type='text'/>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div className='box-recent'>
                                <h4>Recent Posts</h4>
                                {data2.map((item ,index)=>{
                                    return(
                                        <div className='text-recent' key={index}>
                                            <div className='recent-photo'>
                                                <img src={item.photo} alt=''></img>
                                                <div className='text-photo'>
                                                    <h6>{item.text}</h6>
                                                    <div><FontAwesomeIcon icon={item.icon}/>{item.date}</div>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='box-gallery'>
                                <h4>Our Gallery</h4>
                                <div className='photo-gallery'>
                                    <img src={photo4}alt=''></img>
                                    <img src={photo5}alt=''></img>
                                    <img src={photo6}alt=''></img>
                                    <img src={photo7}alt=''></img>
                                    <img src={photo8}alt=''></img>
                                    <img src={photo9}alt=''></img>
                                </div>
                            </div>
                            <div className='box-tags'>
                                <h4>Tags</h4>
                                <div className='button-tags'>
                                    <button>Improvement</button>
                                    <button>Health</button>
                                    <button>Life</button>
                                    <button>Covid</button>
                                    <button>Healthy</button>
                                    <button>Growth</button>
                                    <button>Education</button>
                                    <button>Manage</button>
                                    <button>General</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default BlogDetails