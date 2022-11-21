import React, { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { getEntrolledStudent } from '../../teacher_axios/teacher_axios';
import Theader from './Theader';
import TeacherSidebar from './TeacherSidebar';
function MyStudents() {
    const {teacher} = useContext(AuthContext)

    const [entrollStudent, setEntrollStudent] = useState([]);
    
  
    useEffect(()=>{
      getEntrolledStudent(teacher.teacher_id).then((entroll)=>{
        setEntrollStudent(entroll)
        entroll.forEach((entroll)=>{
           
          
        })
      })
  
  
  
  
    },[])
    // console.log(entrollStudent);
  

    
    console.log('uygj');  


    // console.log(students);
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
          <th scope="col">Email</th>
          <th scope="col">Entrolled Course</th>
          <th scope="col">Assignments</th>
        </tr>
      </thead>
      <tbody>
      {entrollStudent.map((entroll,index)=>{
                   return(
                   <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{entroll.student.username}</td>
                    
                    <td>{entroll.student.email}</td>
                    <td>{entroll.course.title}</td>
                    <td>
                      <Link to={`assignments/${entroll.student.id}/${entroll.course.id}/`} className='btn btn-sm btn-warning'>Assignments</Link>
                      <Link to={`add_assignment/${entroll.student.id}/${entroll.course.id}/`} className='btn btn-sm btn-success ms-2'>Add Assignment</Link>
                    </td>
                    
    
    
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

export default MyStudents
