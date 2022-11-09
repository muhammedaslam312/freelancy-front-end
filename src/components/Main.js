import React from 'react'

import Head from './Head';
import Home from './Home';
import Footer from './Footer';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About';
import CourseDetail from './CourseDetail';
import Slogin from './student/Slogin';
import Sregister from './student/Sregister';
import TeacherDashboard from './teacher/TeacherDashboard';
import Sdashbord from './student/Sdashbord';
import MyCourses from './student/MyCourses';
import RecomendedCourses from './student/RecomendedCourses';
import FavoriteCourses from './student/FavoriteCourses';
import ProfileSetting from './student/ProfileSetting';
import ChangePassword from './student/ChangePassword';
import TeacherLogin from './teacher/TeacherLogin';
import TeacherRegister from './teacher/TeacherRegister';
import { AuthProvider } from '../context/AuthContext';
import AdminAuth from '../utils/AdminAuth';
import AdminDashboard from './admin/AdminDashboard';
import AdminUsers from './admin/AdminUsers';
import AdminTeachers from './admin/AdminTeachers';
import TeacherCourses from './teacher/TeacherCourses';
import RequireAuth from '../utils/RequireAuth';
import AddCourse from './teacher/AddCourse';
import Chapters from './teacher/Chapters';
import OtpVerification from './student/OtpVerification';
import AdminCategory from './admin/AdminCategory';
import AddChapter from './teacher/AddChapter';
import AddCategory from './admin/AddCategory';
import CheckOut from './CheckOut';
import MyStudents from './teacher/MyStudents';



function Main() {
  return (
    <div>
      
      <BrowserRouter>
      <AuthProvider>

      
      <Routes>

        {/* home */}
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/details/:course_id' element={<CourseDetail/>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut/></RequireAuth>}></Route>

        {/* user_routes */}
        <Route path='/user-login' element={<Slogin/>}></Route>
        <Route path='/user-register' element={<Sregister/>}></Route>
        <Route path='/user/dashboard' element={<RequireAuth><Sdashbord/></RequireAuth>}></Route>
        <Route path='/user/otp' element={<OtpVerification/>}></Route>

        {/* <Route path='/my-courses' element={<MyCourses/>}></Route> */}
        <Route path='/my-courses' element={<RequireAuth><MyCourses/></RequireAuth>}></Route>
        <Route path='/favorite-courses' element={<RequireAuth><FavoriteCourses/></RequireAuth>}></Route>
        <Route path='/recomended-courses' element={<RequireAuth><RecomendedCourses/></RequireAuth>}></Route>
        <Route path='/profile-setting' element={<RequireAuth><ProfileSetting/></RequireAuth>}></Route>
        <Route path='/change-password' element={<RequireAuth><ChangePassword/></RequireAuth>}></Route>

        {/* teacher_routes */}
        <Route path='/teacher/login' element={<TeacherLogin/>}></Route>
        <Route path='/teacher/register' element={<TeacherRegister/>}></Route>
        <Route path='/teacher/dashboard' element={<TeacherDashboard/>}></Route>
        <Route path='/teacher/courses' element={<TeacherCourses/>}></Route>
        <Route path='/teacher/addcourse' element={<AddCourse/>}></Route>
        <Route path='/teacher/courses/chapters/:course_id' element={<Chapters/>}></Route>
        <Route path='/teacher/courses/chapters/:course_id/addchapter/:course_id' element={<AddChapter/>}></Route>
        <Route path='/teacher/mystudent' element={<MyStudents/>}></Route>
        

        {/* admin */}

        <Route path="/admin/dashboard" element={<AdminAuth><AdminDashboard/></AdminAuth>}></Route>
        <Route path="/admin/users" element={<AdminAuth><AdminUsers/></AdminAuth>}></Route>
        <Route path="/admin/teachers" element={<AdminAuth><AdminTeachers/></AdminAuth>}></Route>
        <Route path="/admin/category" element={<AdminAuth><AdminCategory/></AdminAuth>}></Route>
        <Route path="/admin/category/addcategory/" element={<AdminAuth><AddCategory/></AdminAuth>}></Route>


      </Routes>
      <Footer/>
      </AuthProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default Main