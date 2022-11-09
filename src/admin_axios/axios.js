import axios from 'axios';
import { useContext } from 'react';
import BaseUrl from '../BaseUrl';




export const getAllusers= () =>{
    return new Promise((resolve,reject) =>{
        
        const AuthToken = JSON.parse(localStorage.getItem('authToken'))
        const config = {
            headers: {
              Authorization: `Bearer ${AuthToken ? AuthToken.access : null}`,
            },
          };
          console.log(AuthToken.access)
       

       

        axios.get(BaseUrl+'getusers/').then((response)=>{
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
})
}

export const blockUser = (user_id)=>{
    console.log('blockkkkkkk')
    axios.patch(BaseUrl+'blockuser/'+user_id+'/').then((response)=>{
        console.log(response.data);
        console.log("updateUserStatus Axios working");
    }).catch((err) => {
        console.log("updateUserStatus Not working");
        console.log(err);
})
}

export const getAllteachers= () =>{
    return new Promise((resolve,reject) =>{
        
        const AuthToken = JSON.parse(localStorage.getItem('authToken'))
        const config = {
            headers: {
              Authorization: `Bearer ${AuthToken ? AuthToken.access : null}`,
            },
          };
          console.log(AuthToken.access)
       

       

        axios.get(BaseUrl+'getteachers/').then((response)=>{
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
})
}

export const verifyTeacher = (teacher_id)=>{

    console.log(teacher_id)
    console.log('verifyyyyyy')
    axios.patch(BaseUrl+'verifyteacher/'+teacher_id+'/').then((response)=>{
        console.log('********')
        console.log(response.data);
        console.log("updateUserStatus Axios working");
    }).catch((err) => {
        console.log("updateUserStatus Not working");
        console.log(err);
})
}

export const getAllAdminCategories = ()=>{

    return new Promise((resolve,reject)=>{
        const AdminToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(AdminToken)
        axios.get(BaseUrl+'admin/course_category_list/').then((response)=>{
            console.log(response.data);
            console.log("getAllcategories Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllcategories Axios Not working");
            reject(err)
         })
        })
}

