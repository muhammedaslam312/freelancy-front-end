import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/AuthContext';
import { getAllTeacherCourses } from '../../teacher_axios/teacher_axios';
import { imageFolder } from '../../BaseUrl';

import TeacherSidebar from './TeacherSidebar'
import Theader from '../Theader';

function TeacherCourses() {
  const {teacher} = useContext(AuthContext)

  const [courses, setCourses] = useState([]);


  useEffect(()=>{
    getAllTeacherCourses(teacher.teacher_id).then((courses)=>{
      setCourses(courses)
      courses.forEach((course)=>{
        console.log(course.title)
      })
    })




  },[])
  return (
    <div>
<Theader/>
<div className='container mt-4'>
<div className='row'>
  <aside className='col-md-3'>
    <TeacherSidebar/>

  </aside>
  <section className='col-md-9 my-3'>

  

<table class="table">
  <thead>
  {/* <h5 className='table-header '>My Courses</h5> */}
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Entrolled Students</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {courses.map((course,index)=>{
               return(
               <tr key={index}>
                <th scope="row">{course.id}</th>
                <td>{course.title}</td>
                
                <td><img src={imageFolder+course.feature_image} width='80' className='rounded' /></td>
                <td><Link to={`chapters/${course.id}`} ><button className=" btn btn-outline-info ">Chapters</button></Link><button className=" btn btn-outline-danger mx-1">Delete</button></td>
                


               </tr>
               )
       })}
   
    
  </tbody>
</table>
    
  </section>

</div>
</div>
</div>
  )
}

export default TeacherCourses
