import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import {faMagnifyingGlass ,faXmark} from '@fortawesome/free-solid-svg-icons'

const DisplayWindow = ({displayserachnone}) => {
  return (
    <Fragment>
    
        <div className='overlay-search'>
        <FontAwesomeIcon icon={faXmark} onClick={displayserachnone}/>
            <div className='container'>
                <form>
                    <input type='text' placeholder='Type Of Search'/>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default DisplayWindow