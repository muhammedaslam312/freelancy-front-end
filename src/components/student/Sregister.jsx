import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BaseUrl from '../../BaseUrl'
import AuthContext from '../../context/AuthContext'
import Head from '../Head'
import './Login.css'

function Sregister() {
  
  const {setTeacherMobile} = useContext(AuthContext)
  const navigate =useNavigate()
  const [userDetails,setUserDetails] = useState(
    {
    'email':'',
    'username':'',
    'password':'',
    'mobile':'',
    'interests':'',
    'status':'',}
  );

  const handleChange = (event)=>{
    setUserDetails({
        ...userDetails,[event.target.name] :event.target.value
    })
    
  }

  // console.log(teacherData);
  const submitForm =()=>{
    console.log(userDetails);
    
    const Form_Data = new FormData();
    Form_Data.append("email", userDetails.email)
    Form_Data.append("username", userDetails.username)
    Form_Data.append("mobile", userDetails.mobile)
    Form_Data.append("password", userDetails.password)
    Form_Data.append("interests", userDetails.interests)
   
    try{
      axios.post(BaseUrl+'user/register/',Form_Data,).then((response)=>{
        setUserDetails({
          'uername':'',
          'email':'',
          'password':'',
          'mobile':'',
          
          'interests':'',
          'status':'success',

        })
        console.log(response.data)
        console.log(response.data.mobile);
        setTeacherMobile(response.data.mobile)
        navigate('/user/otp')
        
      })
    }catch(error){
      console.log(error);
      setUserDetails({
        'status':'error'
      })
    }
  };
  


  return (
    <div>
      <Head/>
      <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form >
        <h5>User Register</h5>
      
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4 mt-3">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Full Name"
              name='username'
              onChange={handleChange}/>
            
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" 
              name='email'
              onChange={handleChange}
              />
          </div>

          <div class="form-outline mb-4">
            <input type="number" id="form3Example3" class="form-control form-control-lg"
              placeholder="Mobile Number"
              name='mobile'
              onChange={handleChange}
             />
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-3">
            <input type="password" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter password"
              name='password'
              onChange={handleChange}
               />
            
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Interests"
              name='interests'
              onChange={handleChange}
               />
              <label>php,python,etc</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg btnl"
              onClick={submitForm}>Register</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/login'
                class="link-danger">Login</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 ">
    {/* <!-- Copyright --> */}
   
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </div>
</section>
    </div>
  )
}

export default Sregister
