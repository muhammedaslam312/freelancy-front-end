import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { imageFolder } from '../BaseUrl';
import AuthContext from '../context/AuthContext';
import { getAllLatestCourse, getAllRecomentedCourse } from '../user_axios/user_axios';
import Carosel from './Carosel';
import Head from './Head';


function Home() {

  let {user} = useContext(AuthContext)
  const [latestCourses, setLatestCourses] = useState([]);
  const [recomtedCourses, setRecomented] = useState([]);


  useEffect(()=>{
    getAllLatestCourse().then((courses)=>{
      setLatestCourses(courses)
      console.log(latestCourses);
      courses.forEach((course)=>{
        console.log(course.title)
      })
    })
    getAllRecomentedCourse(user.user_id).then((courses)=>{
      setRecomented(courses)
      console.log(recomtedCourses);
      
    })




  },[])
  console.log(recomtedCourses);
  return (
    
    <div className="">
      <Head/>
      <Carosel/>
      
      <div className="container">
        <h3 className="border-bottom pd-1 mt-5 h2">Latest Courses<Link to="/all_courses" className="float-end btn btn-dark" style={{fontSize:'15px'}} href="#">See All</Link> </h3>
      <div className="row">
        { latestCourses &&
          latestCourses.map((course,index)=>{
            return (
              <div className=" col-12 col-md-6 col-lg-3 mt-4">
              <div className="card m-auto" style={{ width: "18rem" }}>
                <Link to={`/details/${course.id}`} style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src={imageFolder+course.feature_image}className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <Link to={`/details/${course.id}`}  className="card-title">{course.title}</Link>
                </div>
                <div className="card-footer">
                    <span>Rating : 4.5/5</span>
                    <span className="float-end fs-6">Enrolled Students:</span>
                  </div>
              </div>
            </div>

            )
          })
        }
      </div>
      <h3 className="border-bottom pd-1 mt-5 h2">Recomented Courses <Link to="/all_courses" className="float-end btn btn-dark" style={{fontSize:'15px'}} href="#">See All</Link></h3>
      <div className="row">
      { recomtedCourses &&
          recomtedCourses.map((course,index)=>{
            return (
        <div className=" col-12 col-md-6 col-lg-3 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src={imageFolder+course.feature_image} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">{course.title}</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>
          )
        })
      }
        

        
      </div>
    </div>
    </div>
    
  )
}

export default Home
