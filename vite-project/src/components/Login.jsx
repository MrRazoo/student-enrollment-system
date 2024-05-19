import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import imag1 from '../../public/images/admin_pic.png'


const Login= () => {


  const Navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [values , setValues] = useState({
    email:'',
    password:''
  })
  const [error, setError] = useState(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    // * axios help to read and write data without refreshing the browser
    axios.post('http://localhost:8081/auth/adminlogin', values)
    .then(result => 
    {
      if(result.data.loginStatus)
      {
        Navigate('/dashboard')
      }
      else
      {
        setError(result.data.Error)
      }
    })
    .catch(err => console.log(err))
  }
  return (

    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      
        <div className='p-3 rounded w-25 loginForm'>
            <h4 style={{ textAlign:'center' , fontSize:'20px'/*, backgroundColor:'#002D62', color:'white'*/}}><small>Air University Login Page</small></h4>
            <div className='text-danger'>
              {error && error}
            </div>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" name='email' onChange={(e) => setValues({...values , email : e.target.value})} autoComplete='off' placeholder='Enter email' className='form-control rounded-0'/>
            </div>

            <div className='mb-3'>
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="password" name='password' onChange={(e) => setValues({...values , password : e.target.value})} placeholder='Enter password' className='form-control rounded-0'/>
            </div>
            <div className='btn-cont'>
            <button className='btn btn-success rounded-0 mb-3'>Login</button>
            <button className='btn btn-success rounded-0 mb-3'>Forget</button>
            </div>
          </form>
        </div>
    </div>
    )
}

export default Login