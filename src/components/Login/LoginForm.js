import React, { Fragment } from 'react'
import logo from '../../images/logo.png'

const LoginForm = () => {
  return (
    <Fragment>
      <div className='login'>
        <div className='container'>
          <form>
            <img src={logo} alt=''></img>
            <div className='input-group1'>
              <input type='text' placeholder='Username'/>
              <input type='text' placeholder='Password'/>
              <input type='submit' value='Login' />
            </div>
            <h3>Forgot Password</h3>
            <p>Dont have any account?</p>
            <input type='submit' value='Register' className='one'/>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginForm