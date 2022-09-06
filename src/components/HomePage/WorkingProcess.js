import React, { Fragment } from 'react'
import {faAngleRight } from  "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const WorkingProcess = () => {
  return (
    <Fragment>
        <div className='working-process'>
            <div className='container'>
                <div className='text-working-process'>
                    <div>Working Process</div>
                    <h2>How we works?</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 card'>
                        <div className='box-card'>
                            <div className='number'>01</div>
                            <h4>Make Appointmnet</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>View More <FontAwesomeIcon icon={faAngleRight}/></button>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 card'>
                        <div className='box-card'>
                            <div className='number'>02</div>
                            <h4>Take Treatment</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>View More <FontAwesomeIcon icon={faAngleRight}/></button>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 card'>
                        <div className='box-card'>
                            <div className='number'>03</div>
                            <h4>Registration</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <button>View More <FontAwesomeIcon icon={faAngleRight}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default WorkingProcess