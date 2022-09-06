import React, { Fragment } from 'react'

const Statistics = () => {

    const dataStatistics=[
        {number:120 , years:"Years With You" , paragraph:"Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."},
        {number:400 , years:"Awards" , paragraph:"Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."},
        {number:250 , years:"Doctors" , paragraph:"Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."},
        {number:800 , years:"Satisfied Client" , paragraph:"Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."},
    ]

  return (
    <Fragment>
        <div className='statistics'>
            <div className='container'>
                <div className='row'>
                {dataStatistics.map((e ,index)=>{
                    return(
                        <div className='col-xl-3 col-lg-6' key={index}>
                                <div className='box-statistics'>
                                    <h3>{e.number}</h3>
                                    <h4>{e.years}</h4>
                                    <p>{e.paragraph}</p>
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

export default Statistics