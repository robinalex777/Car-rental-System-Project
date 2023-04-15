import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';

export default function Register() {

  // let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    drivingLicNo: "",
    phone: "",
    password: "",
    cpass:""
  });

  const { firstName, lastName, email, age, drivingLicNo,
    phone, password,cpass } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    
    e.preventDefault();
    
   if(validate()){
    await axios.post("http://localhost:8080/userregister", user);
    alert("Registered Successfully!!!")
    {/*using emailjs*/ }
    emailjs.send('service_6ldntpk', 'template_an3fv4h', { FirstName:user.firstName, Password: user.password, email: user.email }, 'hIV0DNh15aWiAk4S5').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
    
   
    console.log(user);
    console.log("success");

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      drivingLicNo: "",
      phone: "",
      password: "",
      cpass:""
    });
  }
  else{
    alert("Invalid details");
  }
  };

  return (
    <div>
      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
            height: "300px",
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form onSubmit={(e) => onSubmit(e)} name="myform">
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          name="firstName"
                          value={firstName}                        
                          onChange={(e) => onInputChange(e)}
                          
                        />
                        <label className="form-label" htmlFor="form3Example1cg" id="firstName" style={{ color: 'red' }} ></label>

                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          name="lastName"
                          value={lastName}                          
                          onChange={(e) => onInputChange(e)}
                         
                        />
                       <label className="form-label" htmlFor="form3Example1cg" id="lastName" style={{ color: 'red' }} ></label>

                      </div>
                    </div>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      value={email}                     
                      onChange={(e) => onInputChange(e)}
                      
                    />
                   <label className="form-label" htmlFor="form3Example1cg" id="email" style={{ color: 'red' }} ></label>

                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                      Age
                    </label>
                    <input
                      type="number"
                      id="ageid"
                      className="form-control"
                      name="age"
                      value={age}
                      onChange={(e) => onInputChange(e)}
                      
                    />
                   <label className="form-label" htmlFor="form3Example1cg" id="age" style={{ color: 'red' }} ></label>

                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                      Driving Licence Number
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      name="drivingLicNo"
                      value={drivingLicNo}
                      
                      onChange={(e) => onInputChange(e)}
                     
                    />
                   <label className="form-label" htmlFor="form3Example1cg" id="drivingLicNo" style={{ color: 'red' }} ></label>

                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      id="form3Example3"
                      className="form-control"
                      name="phone"
                      value={phone}
                      onChange={(e) => onInputChange(e)}
                      

                    />
                    <label className="form-label" htmlFor="form3Example1cg" id="phone" style={{ color: 'red' }} ></label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                      value={password}
                     
                      onChange={(e) => onInputChange(e)}
                    />
                     <label className="form-label" htmlFor="form3Example1cg" id="password" style={{ color: 'red' }} ></label>
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4">
                     Confirm  Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="cpass"
                      value={cpass}
                      
                      onChange={(e) => onInputChange(e)}
                    />
                     <label className="form-label" htmlFor="form3Example1cg" id="cpass" style={{ color: 'red' }} ></label>
                  </div>

                  {/* Submit button */}

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"

                  >
                    Sign up
                  </button>
                  <br />
                  <Link to={"/login"}>
                    <button
                      className="btn btn-primary btn-block mb-4"

                    >
                      Login
                    </button>
                  </Link>



                  {/* Register buttons */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  )
}
function validate() {

  var firstName =
      document.forms.myform.firstName.value;

  var lastName =
      document.forms.myform.lastName.value;    
 
  var email =
      document.forms.myform.email.value;

  var age =
     document.forms.myform.age.value;
  
  var drivingLicNo=
      document.forms.myform.drivingLicNo.value;
 
  var contact =
      document.forms.myform.phone.value;

  var password1 =
      document.forms.myform.password.value;

  var password2 =
      document.forms.myform.cpass.value;

  var regName = /^[a-zA-Z]{1,}$/;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regAge = /^[0-9]{2,3}$/;
  var regPassword1 = /^[a-zA-Z0-9]{8,22}$/;
  var regPassword2 = /^[a-zA-Z0-9]{8,22}$/;
  var regContact = /^[789][0-9]{9}$/;
  var regDrivingNo=/^[A-Z]{2}[0-9]{14}$/;


  var msg = document.getElementById("firstName");
  if (firstName == "" || !regName.test(firstName)) {
      msg.innerHTML = " *Please enter a valid firstname";
      return false;
  }
  msg.innerHTML = "";

   msg = document.getElementById("lastName");
  if (lastName == "" || !regName.test(lastName)) {
      msg.innerHTML = " *Please enter a valid lastname";
      return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("email");
  if (email == "" || !regEmail.test(email)) {
      msg.innerHTML = " *Please enter a valid email";
      return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("age");
  if (age == "" || !regAge.test(age) ||age<18 || age>100) {
      msg.innerHTML = " *Please enter a valid age";
      return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("drivingLicNo");
  if (drivingLicNo== "" || !regDrivingNo.test(drivingLicNo)) {
      msg.innerHTML = " *Please enter a valid liscense number";
      return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("phone");
  if (contact == "" || !regContact.test(contact)) {
      msg.innerHTML = " *Please enter a valid phone number";
      return false;
  }
  msg.innerHTML = "";

 

  msg = document.getElementById("password");
  if (password1 == "" || !regPassword1.test(password1)) {
      msg.innerHTML = " *Please enter a valid password between 8 to 22 characters.";
      return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("cpass");
  if (password2 == "" || !regPassword2.test(password2)) {
      msg.innerHTML = " *Please enter a valid password between 8 to 22 characters.";
      return false;
  }
  msg.innerHTML = "";

  var msg1 = document.getElementById("password");
  var msg2 = document.getElementById("cpass");
  if (password2 != password1) {
      msg1.innerHTML = " *Both password must be same.";
      msg2.innerHTML = " *Both password must be same.";
      return false;
  }
  msg1.innerHTML = "";
  msg2.innerHTML = "";

  return true;
}