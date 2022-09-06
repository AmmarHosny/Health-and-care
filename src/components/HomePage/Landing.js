import React, { Fragment } from 'react'
import photo1 from '../../images/photo1.png'
import Cricle from '../../images/Circle.png'
import plus from  '../../images/plus.png'
import triangle from '../../images/triangle.png'
import Waves from  '../../images/Waves.png'


const Landing = () => {
  return (
    <Fragment>
        <div className='landing'>
        
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 col-md-6 col-sm-12 text-landing'>
                        <h4>We Provide All Health Care Solution</h4>
                        <h1>Protect Your Health And Take Care To Of Your Health</h1>
                        <button>Read More</button>
                    </div>
                    <div className='col-lg-5 col-md-6 col-sm-12'>
                        <img src={photo1} alt=''></img>
                    </div>
                </div>
                <div className='shapes'>
                    <img className='' src={Cricle}alt=''></img>
                    <img className='' src={plus} alt=''></img>
                    <img className='' src={triangle} alt=''></img>
                    <img className='' src={Waves} alt=''></img>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Landing