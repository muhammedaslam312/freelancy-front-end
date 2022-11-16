import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { imageFolder } from '../BaseUrl'
import AuthContext from '../context/AuthContext'
import { getFavoriteCourses } from '../user_axios/user_axios'
import Head from './Head'

function WhishList() {
    let {user} = useContext(AuthContext)
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        getFavoriteCourses(user.user_id).then((course)=>{
          setCourses(course)
          
        })

      },[])

  return (
    <div>
        <Head/>
      <div className='container mt-4'>
<div className='row'>
  
  <section className='col-md-12 my-3'>

  
<h3 className='fst-italic'>My Wishlist</h3>
{ courses ===0 ?
<table class="table">
  <thead>
  {/* <h5 className='table-header '>My Courses</h5> */}
    <tr>
     
      <th scope="col">course</th>
      <th scope="col">image</th>
      <th scope="col">price</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    
  { courses.map((fav,index)=>{
               return(
               <tr key={index}>
                
                <td>{fav.course.title}</td>
                
                
                <td><img src={imageFolder+fav.course.feature_image} width='80' className='rounded' /></td>
                <td>{fav.course.price}</td>
                <td><Link to={`chapters/${fav.course.id}`} ><button className=" btn btn-outline-warning ">Remove</button></Link><button className=" btn btn-outline-primary mx-1">Buy Now</button></td>
                


               </tr>
               )
       })
       }
   
    
  </tbody>
</table>
:
<h2 className='my-5'>Your Wishlist is Empty</h2>
}
    
  </section>

</div>
</div>
    </div>
  )
}

export default WhishList
