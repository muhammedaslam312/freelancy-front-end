import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllAdminCategories } from '../../admin_axios/axios';
import AdminSidebar from './AdminSidebar'

function AdminCategory() {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        

        getAllAdminCategories().then((categories)=>{
            setCategories(categories)
            categories.forEach((category)=>{
                console.log(category.title);
            })
        })
        

    },[])


  return (
    <div>

        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                <AdminSidebar/>

                </aside>
                <section className='col-md-9'>

                <table class="table">
                    <thead>
                    {/* <h5 className='table-header '>Recomended Courses</h5> */}
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                       
                        <th scope="col">Action</th>
                        <th scope="col"><Link to='addcategory/' ><button className=" btn btn-outline-info ">Add Category</button></Link></th>
                        </tr>
                    </thead>
                    <tbody>
                    {categories.map((category,index)=>{
                                        return(
                                            <tr key={index}>
                                            <th scope="row">{category.id}</th>
                                            <td>{category.title}</td>
                                            
                                            <td><button className=" btn btn-outline-danger ">Delete</button></td>
                                            </tr>)
                                            
                                        
                                    })}
                        
                    </tbody>
                </table>
                

                </section>

        </div>
    </div>

    </div>
  )
}

export default AdminCategory
