import axios from "axios"
import BaseUrl from "../BaseUrl"

export const getAllLatestCourse= ()=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).acess
        console.log(UserToken)
        axios.get(BaseUrl+'get_allcourses/latest/').then((response)=>{
            console.log(response.data);
            console.log("getAllchapter Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllchapter Axios Not working");
            reject(err)
         })
        })
}

export const getAllRecomentedCourse= (user_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).acess
        console.log(UserToken)
        axios.get(BaseUrl+'recomented_courses/'+user_id+'/').then((response)=>{
            console.log(response.data);
            console.log("getAllchapter Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllchapter Axios Not working");
            reject(err)
         })
        })
}

export const getCourseDetails = (course_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'course_details/'+course_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("getAllchapter Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getAllchapter Axios Not working");
            reject(err)
         })
        })
}

export const getEntrolledCourse = (user_id)=>{

    return new Promise((resolve,reject)=>{
        const UserToken = JSON.parse(localStorage.getItem('authToken')).access
        console.log(UserToken)
        axios.get(BaseUrl+'get_entrolled/'+user_id+'/',{
            headers:{"Authorization" : `Bearer ${UserToken}`}
        }).then((response)=>{
            console.log(response.data);
            console.log("Entrolled_course Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("Entrolled_course Axios Not working");
            reject(err)
         })
        })
}

// export const getOneCourseChapters = (course_id)=>{

//     return new Promise((resolve,reject)=>{
//         const TeacherToken = JSON.parse(localStorage.getItem('teacherToken')).token
//         console.log(TeacherToken)
//         axios.get(BaseUrl+'get_chapters/'+course_id+'/',{
//             headers:{"Authorization" : `Bearer ${TeacherToken}`}
//         }).then((response)=>{
//             console.log(response.data);
//             console.log("getAllchapter Axios working");
//             resolve(response.data)
//         }).catch((err) => {
//             console.log("getAllchapter Axios Not working");
//             reject(err)
//          })
//         })
// }