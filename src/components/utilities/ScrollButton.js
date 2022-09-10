import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useRef } from 'react'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'

const ScrollButton = () => {

    const ScrollButton = useRef()

        window.onscroll = ()=>{
            if(window.scrollY> 700){
                ScrollButton.current.style ="top:550px"
            }else{
                ScrollButton.current.style ="top:0px"
            }
        }

        const goToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };
  return (
    <Fragment>
    <div className='scroll-button' ref={ScrollButton} onClick={goToTop}>
            <FontAwesomeIcon icon={faAngleUp} />
        </div>
    </Fragment>
  )
}

export default ScrollButton