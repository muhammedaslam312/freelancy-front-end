import { Link, useParams } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { getCourseDetails } from "../user_axios/user_axios";
import { useContext, useEffect, useState } from "react";
import BaseUrl, { imageFolder } from "../BaseUrl";
import axios from "axios";
import Head from "./Head";
import AuthContext from "../context/AuthContext";
import DialogContent from '@mui/material/DialogContent';
import Swal from "sweetalert2";

function CourseDetail (){
    let {course_id} = useParams(); 
    let {user} = useContext(AuthContext)
    const user_id= user.user_id;

    const [courseDetail, setCourseDetail] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [teacher,setTeacher]= useState([]);
    const [realted,setRelated] = useState([]);
    const [enrollStatus,setEntrollStatus] =useState(false);
    const [entroll_count,setEntroll_count]=useState('');

    const [favoriteStatus,setFavoriteStatus] = useState('');

    const markAsFavorite =()=>{
      const _formData=new FormData();
      _formData.append('course',course_id);
      _formData.append('student',user_id);
      _formData.append('status',true)

      try{
        axios.post(BaseUrl+'add_favorite/',_formData).then((res)=>{
          if(res.status=== 200 || res.status ===201){
            Swal.fire({
              position: 'top-right',
              icon: 'success',
              title: 'This course has been added in your wish list',
              showConfirmButton: false,
              timer: 10000,
              toast:true,
              timerProgressBar:true

              });
              setFavoriteStatus('success')
          }
        })
      }catch(error){
        console.log(error);

      }

    }


    const removeFavorite =()=>{
      

      try{
        axios.delete(BaseUrl+'remove_favorite/'+user_id+'/'+course_id).then((res)=>{
          if(res.status=== 200 || res.status ===201){
            Swal.fire({
              position: 'top-right',
              icon: 'success',
              title: 'This course has been removed from your wish list',
              showConfirmButton: false,
              timer: 10000,
              toast:true,
              timerProgressBar:true

              });
              setFavoriteStatus('')
          }
        })
      }catch(error){
        console.log(error);

      }

    }



    useEffect(()=>{
        getCourseDetails(course_id).then((course)=>{
          console.log(course.data);
          setCourseDetail(course);
          
         
          
          console.log(teacher)
          console.log(chapters);
          
          course.forEach((course)=>
          
          {
            setTeacher(course.teacher);
            setChapters(course.course_chapters);
            setRelated(JSON.parse(course.related_courses));
          
          })
          console.log('hiii');
        })
        

        try{
          axios.get(BaseUrl+'entroll_status/'+user_id+'/'+course_id).then((res)=>{
            console.log(res);
            if(res.data.bool == true){
              setEntrollStatus('success')
              setEntroll_count(res.data.count)
            }
            

          });
        }catch(error){
          console.log(error)
        }

        

     

      },[])
      console.log(courseDetail);
      console.log(realted);
      console.log(chapters);
      console.log(course_id)
      console.log(user_id);
      console.log(enrollStatus);
      console.log(entroll_count);
      console.log(favoriteStatus);

    return(
        
        <div>
          <Head/>
      <div className="container mt-5">
      {courseDetail.map((course,index)=>{
               return(
      <div className="row" key={index}>
        <div className="col-4 ">
        <div className="card " style={{ width: "18rem" }}>
            <Link to="/details/1" style={{ margin:'auto'}}><img style={{ height: "250px",width: "250px"}} src={imageFolder+course.feature_image} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <Link style={{textDecoration:"None"}} to="/details/1" className="card-title">Card title</Link>
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                { favoriteStatus !== 'success' &&
                <span className="float-end fs-6"><button onClick={markAsFavorite} title="add in your wishlist" className="btn btn-outline-danger"><i className="bi bi-heart"></i></button></span>
                }
                 { favoriteStatus === 'success' &&
                <span className="float-end fs-6"><button onClick={removeFavorite} title="add in your wishlist" className="btn btn-danger"><i className="bi bi-heart"></i></button></span>
                }
              </div>
          </div>
          
        </div>
       
        <div className="col-8 bg-light border border-dark ">
          <div>
            
          <h1>{course.title} <span className="float-end fs-5 btn btn-light" style={{cursor: "default"}}>FREE / ₹499</span> </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iusto odit accusamus doloribus eius atque blanditiis, vero incidunt alias tenetur error eligendi nulla voluptatibus aut quidem. Voluptas delectus aliquid assumenda omnis eum, error autem soluta magnam quibusdam atque excepturi laborum ab temporibus obcaecati qui quae! Nisi autem hic corrupti cumque itaque modi corporis nihil! Perspiciatis, quis? Corrupti adipisci, dolorum, minus magnam minima iste saepe tempora blanditiis asperiores, enim autem consectetur aspernatur dolorem. Aspernatur esse facere odio tenetur harum, alias quam neque, quidem doloremque incidunt, laudantium laborum adipisci. Odio temporibus pariatur nulla fugit? Veniam praesentium voluptatum odit libero rem, perspiciatis ipsa!</p>
          <p><b>Created by        : </b><Link to="/user_details/1" style={{textDecoration:"None"}}>{course.teacher.full_name}</Link> 12/12/12</p>
          <p><b>Duration          : </b>3 Hours</p>
          <p><b>Enrolled Students : </b>{entroll_count} Students</p>
          <p><b>Rating : </b> 4.5/5</p>
          <button className="btn btn-primary float-end">Enroll Now</button>
          </div>
        </div>
      
      </div>
               )})}
      
      <div className="card mt-5 border-right-0" >
        <div className="card-header">
          Play List
        </div>
        <ul className="list-group list-group-flush ">
        {chapters.map((chapter,index)=>{
               return(
          
          <li className="list-group-item " key={index} >
            {chapter.title}
            <span className="float-end me-3">
              <span className="m-auto">10 Minutes</span>
              <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#exampleModal1"><YouTubeIcon/></button>
             {/* Video Modal */}
                     <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Video Title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                          <div className="ratio ratio-16x9">
                                <iframe src={imageFolder+chapter.video} title="" frameborder="0" allowfullscreen></iframe>
                          </div>
                          </div>
                          
                        </div>
                      </div>
                    </div> 
                  
              {/* End Video Modal */}
            </span> 
          </li>
         )})}

          {/* <li className="list-group-item">2. Project Setup<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li className="list-group-item">3. Video 1<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li className="list-group-item ">4.  Introduction<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li className="list-group-item">5. Project Setup<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li className="list-group-item">6. Video 1<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li> */}
        
        </ul>
      </div>
        
      <h3 className="border-bottom pd-1 mt-5">Related Courses </h3>
      <div className="row">
      {realted.map((rel,index)=>{
               return(
        <div className=" col-12 col-md-6 col-lg-3 mt-4" key={index}>
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src={imageFolder+'/media/'+rel.fields.feature_image} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">{rel.fields.title}</a>
              
            </div>
          </div>
        </div>
          )})}
       

        

        
        
      </div>
      

  </div>;

     
  </div>
      

    );
}

export default CourseDetail