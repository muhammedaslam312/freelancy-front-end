
import Head from './Head'
import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { imageFolder } from '../BaseUrl';
import AuthContext from '../context/AuthContext';

import { getAllLatestCourse} from '../user_axios/user_axios';
import './CoursePage.css'


function CoursesPage() {

    let {user} = useContext(AuthContext)
  const [latestCourses, setLatestCourses] = useState([]);



  useEffect(()=>{
    getAllLatestCourse().then((courses)=>{
      setLatestCourses(courses)
      console.log(latestCourses);
      courses.forEach((course)=>{
        console.log(course.title)
      })
    })
    




  },[])
  return (
    <div>
        <Head/>
      <section class="new-product-area section-padding30">
            <div class="container my-5">
                {/* <!-- Section tittle --> */}
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-tittle mb-70">
                            <h2>All Courses</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                { latestCourses &&
          latestCourses.map((course,index)=>{
            return (
              <div className=" col-12 col-md-6 col-lg-3 mt-4  " key={index}>
              <div className=" m-auto" style={{ width: "18rem" }}>
                <Link to={`/details/${course.id}`} style={{ margin:'auto'}}><img style={{ height: "200px",width: "100%",objectFit:'cover'}}src={imageFolder+course.feature_image}className="card-img-top" alt="..." />
                </Link>
                <div className="card-body" style={{textAlign:'left'}}>
                  <Link to={`/details/${course.id}`} style={{textDecoration:'none',fontSize:'25px',fontWeight:'bold',color:'black'}}  >{course.title}</Link>
                </div>
                <div className="card-footer">
                    <div style={{textAlign:'left'}}>Rating : 4.5/5</div>
                    <div style={{textAlign:'left'}}>Enrolled Students:</div>
                    <div style={{textAlign:'left'}}>$54343</div>
                  </div>
              </div>
            </div>

            

            )
          })
        }
                
                   
                </div>
            </div>
        </section>
    </div>
  )
}

export default CoursesPage
