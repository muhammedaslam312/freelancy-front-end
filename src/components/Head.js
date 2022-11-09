import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import './Header.css'
function Head() {
  const {user,teacher,logOutUser,logOutTeacher} = useContext(AuthContext)
  console.log(user)
  return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-gray-800">
//       <div className='container'>
//   <a className="navbar-brand " href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav ms-auto">
//       {user &&
      
//       <Link className="nav-item nav-link" to='/'>Home</Link>
// }
// {user &&
//       <a className="nav-item nav-link" href="#">Courses</a>
//     }
//     {user &&
//       <Link className="nav-item nav-link" to='/about'>About</Link>}
      
    
//       {user  ?
      
//       <li className='nav-item dropdown'>
       
//       <ul className='dropdown-menu text-dark' aria-labelledby='navbarDropdown'>
//         <li><Link className="dropdown-item  text-dark" to='/user-login'>Login</Link></li>
//         <li><Link className="dropdown-item text-dark" to='/user-register'>Register</Link></li>
//         <li><hr className='dropdown-divider'/></li>
//         <li><a className="dropdown-item text-dark" onClick={logOutUser}>Log Out</a></li>
//         <li><Link className="dropdown-item text-dark" to='/user-dashboard'>Dashboard</Link></li>
//         <li></li>
//       </ul>
//       </li>
//       :
      
//       <Link className="nav-item nav-link" to='/user-login'>Login</Link>
 
     
//         }
       

      
     
//     </div>
//   </div>
//   </div>
// </nav>
<div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-header">
        <div className="container">
          <Link to="/" className="navbar-brand center">
            
            freelancy
          </Link>
          
          <>
          <form className="d-flex col-md-6 ms-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto mb-lg-1 d-flex">
            {user && 
            <li className="nav-item ms-3 ">
            <Link to="/" className="nav-link">
              <Tooltip title="Username">
                <h6>{user.username}</h6>
              </Tooltip>
            </Link>
          </li>
            }
              <li className="nav-item ms-3 ">
                <Link to="/user/dashboard" className="nav-link">
                  <Tooltip title="Dashboard">
                    <AccountCircleIcon />
                  </Tooltip>
                </Link>
              </li>

              <li className="nav-item ms-3 ">
                <Link to="/messenger" className="nav-link">
                  <Tooltip title="Messager">
                    <ForumIcon />
                  </Tooltip>
                </Link>
              </li>
              {
                user && 
                <li className="nav-item ms-3">
                <Link to="/wallet" className="nav-link">
                  <Tooltip title="Wallet">
                    <AccountBalanceWalletIcon/>
                  </Tooltip>
                  <span className='ms-1'>₹</span>
                </Link>
              </li>

              }
              
              <li className="nav-item ms-3 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  more
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/user/dashboard" className="dropdown-item">Dashboard</Link>
                  </li>
                  <li>
                    <p onClick={logOutUser} className="dropdown-item">Logout</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          </>
        </div>
      </nav>
    </div>

  )
}

export default Head
