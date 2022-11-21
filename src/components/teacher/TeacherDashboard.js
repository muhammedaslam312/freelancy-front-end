import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import {Routes as Switch,Route } from 'react-router-dom'
import BaseUrl from '../../BaseUrl'
import AuthContext from '../../context/AuthContext'
import Theader from './Theader'

import TeacherSidebar from './TeacherSidebar'

function TeacherDashboard() {
  const {teacher} = useContext(AuthContext)
  const [dashboard,setDashboard]=useState([]);
  useEffect(()=>{
    try{
      const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
      axios.get(BaseUrl+'teacher_dashboard/'+teacher.teacher_id+'/',{
        headers:{"Authorization" : `Bearer ${TeacherToken}`}
    }).then((res)=>{
        console.log(res);
        setDashboard(res.data)
        
        

      });
    }catch(error){
      console.log(error)
    }
  },[])
  console.log(dashboard);
  return (
    <div>
      <Theader/>
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <TeacherSidebar/>

        </aside>
        <section className='col-md-9'>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-success text-white">Total Courses</h5>
                <div className="card-body">
                  <h3><Link to='/teacher/courses'>{dashboard.total_courses}</Link></h3>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-success text-white">Total Students</h5>
                <div className="card-body">
                  <h3><Link to='/teacher/mystudent'>{dashboard.total_students}</Link></h3>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-success text-white">Total Amount</h5>
                <div className="card-body">
                  <p>total amount</p>
                  

                </div>

              </div>
            </div>
            
          </div>
          

          
        </section>

      </div>
    </div>
    <div>
      
    </div>
    </div>

  )
}

export default TeacherDashboard
