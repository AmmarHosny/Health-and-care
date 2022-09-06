import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFieldUn ,faBed ,faSquareH ,faSyringe} from '@fortawesome/free-solid-svg-icons'

const Servicess = () => {
    
    const data=[
        {icon:faTruckFieldUn , name:"Vaccine" , paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis" , mybutton:"View More"},
        {icon:faBed , name:"Emergency" , paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis" , mybutton:"View More"},
        {icon:faSquareH , name:"Diagnostics" , paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis" , mybutton:"View More"},
        {icon:faSyringe , name:"Treatment" , paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis" , mybutton:"View More"},
        {icon:faTruckFieldUn , name:"Vaccine" , paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis" , mybutton:"View More"},
        {icon:faSquareH , name:"Diagnostics" , paragraph:"phasellus venenatis porta rhonchus. integer et viverra felis" , mybutton:"View More"},
    ]

  return (
    <Fragment>
        <div className='section-services'>
            <div className='container'>
                <div className='row'>
                    {data.map((e ,index)=>{
                        return(
                            <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
                                <div className='box-services'>
                                    <div className='icon-cell'>
                                        <FontAwesomeIcon icon={e.icon}/>
                                    </div>
                                    <div className='text-box'>
                                        <h2>{e.name}</h2>
                                        <p>{e.paragraph}</p>
                                    </div>
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

export default Servicess