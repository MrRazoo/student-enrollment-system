import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import imag1 from '../../public/images/admin_pic.png'

const Dashboard = () => {
  const nanvigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios.get('http://localhost:8081/auth/logout')
    .then(result => {
      if(result.data.Status) { 
        localStorage.removeItem("valid")
        nanvigate('/')
      }
    })
    
  }
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              
              <div className="ms-4">
                <img src={imag1} alt="" style={{ width: 100, height:100, borderRadius:' 50%'}}/>
                </div>
              
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-5 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline "><small>Dashboard</small></span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/student"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-5 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    <small>Manage Students</small>
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/catagory"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-5 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline"><small>Category</small></span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-5 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline"><small>Profile</small></span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
              <Link
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline"><small>Logout</small></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>Au Portal System</h4>
            </div>
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;