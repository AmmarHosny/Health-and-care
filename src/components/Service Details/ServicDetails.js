import React, { Fragment } from 'react'
import photo from '../../images/pic2.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck ,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion';
import bdf from '../../images/bdf.png';
import doc from '../../images/doc.png';

const ServicDetails = () => {
  return (
    <Fragment>
      <div className='service-details'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='box-service-details'>
                <img src={photo} alt=''></img>
                <h2>Why Medical Had Been So Popular Till</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
              <div className='row'>
                  <div className='col-lg-6 box-check'>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} /> <span>Then along come two they</span></li>
                      <li><FontAwesomeIcon icon={faCheck} /> <span>That’s just a little bit more than</span></li>
                      <li><FontAwesomeIcon icon={faCheck} /> <span>Standard dummy text ever since</span></li>
                      <li><FontAwesomeIcon icon={faCheck} /> <span>Simply dummy text of the printing</span></li>
                      <li><FontAwesomeIcon icon={faCheck} /> <span>Make a type specimen book</span></li>
                    </ul>
                  </div>
                  <div className='col-lg-6'>
                      <div className='progres'>
                        <div className='box-progress'>
                          <div className='text-progress'>
                            <h6>Advanced Technology</h6>
                          </div>
                          <div className='skill-progress'>
                            <p><span style={{width:"96%"}}></span></p>
                            <span>96%</span>
                          </div>
                        </div>
                        <div className='box-progress'>
                          <div className='text-progress'>
                            <h6>Certified Engineers</h6>
                          </div>
                          <div className='skill-progress'>
                            <p><span style={{width:"79%"}}></span></p>
                            <span>79%</span>
                          </div>
                        </div>
                        <div className='box-progress'>
                          <div className='text-progress'>
                            <h6>6 years Experience</h6>
                          </div>
                          <div className='skill-progress'>
                            <p><span style={{width:"75%"}}></span></p>
                            <span>75%</span>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
              <div className='box-service-details'>
                <h2>Popular Questions</h2>
                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
              <div className='qu2'>
                <Accordion>
                  <Accordion.Item eventKey="0">
                      <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
                      <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                      <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
                      <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                      <Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
                      <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                      <Accordion.Header>What types of systems do you support?</Accordion.Header>
                      <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                      <Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
                      <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                      <Accordion.Header>How Can I Contact You?</Accordion.Header>
                      <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='box-sticky'>
                <div className='box-info '>
                  <ul>
                    <li>Engine Diagnostics <FontAwesomeIcon icon={faAngleRight} /></li>
                    <li>Lube Oil And Filters <FontAwesomeIcon icon={faAngleRight} /></li>
                    <li>Belts And Hoses <FontAwesomeIcon icon={faAngleRight} /></li>
                    <li>Air Conditioning <FontAwesomeIcon icon={faAngleRight} /></li>
                    <li>Brake Repair <FontAwesomeIcon icon={faAngleRight} /></li>
                    <li>Tire And Wheel Services <FontAwesomeIcon icon={faAngleRight} /></li>
                  </ul>
                </div>
                <div className='download'>
                  <h3>Download</h3>
                  <div className='box-download'>
                    <img src={bdf} alt=''></img>
                    <div className='text-download'>
                      <h4>Download Our Brochures</h4>
                      <h5>Download</h5>
                    </div>
                  </div>
                  <div className='box-download'>
                    <img src={doc} alt=''></img>
                    <div className='text-download'>
                      <h4>Download Our Brochures</h4>
                      <h5>Download</h5>
                    </div>
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

export default ServicDetails