import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Navbar3() {
  let isLogin = localStorage.getItem("user");

  return (
    <>
      {isLogin ? <AppNavLinks4LoggedInUser /> : <AppNavLinks4NotLoggedInUser />}
    </>
  );
}


function AppNavLinks4LoggedInUser() {
  let navigate = useNavigate();

  const processLogout = () => {
    localStorage.removeItem('user');
    alert('logout successfully');
     navigate('/login');
   
  };

  return (
    <>
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">RentSelf Car</Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                >Home</Link
              >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"> About </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"> Contact </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policies"> Policies </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/insurance"> Insurance </Link>
            </li>
          </ul>
          <div className="d-flex">
            
            <button className="btn btn-danger " onClick={processLogout}>Logout</button>
          </div>
          </div>
      </div>
    </nav>
    </div>
    </>
  );
}

function AppNavLinks4NotLoggedInUser() {
 const navigate = useNavigate();
 const[logIN,setLogIn]=useState("LogIn");

 
   const optionChangeHandler = (event) => {
       navigate(event.target.value);
    }
 return (
   <div>
       <nav id="navbar" className="navbar navbar-expand-lg bg-light">
     <div className="container-fluid">
       <Link className="navbar-brand" to="/">RentSelf Car</Link>
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
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <Link
               className="nav-link active"
               aria-current="page"
               to="/"
               >Home</Link
             >
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/about"> About </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/contact"> Contact </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/policies"> Policies </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/insurance"> Insurance </Link>
           </li>
         </ul>
         
         <div className="d-flex">
         <select className="btn btn-primary "  onChange={optionChangeHandler}>
                       <option value="">login</option>
                       <option value="/adminlogin">Admin Login</option>
                       <option value="/login">User Login</option>
                       
                   </select>
         </div>
       </div>
     </div>
   </nav>
   </div>
  
    );
  
}


export default Navbar3;