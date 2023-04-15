import React, { useState } from "react";
import "../css/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Modal,Button } from 'react-bootstrap'
import { useEffect } from "react";

const BookingForm = () => {

  const navigate=useNavigate();
  const adminObj = JSON.parse(localStorage.getItem("user"));
      useEffect(()=>{
        if(adminObj==null){
          navigate('/login');
        }
       
      },[])
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    amount:"",
    fromLocation: "",
    dropLocation: "",
    noOfDays: "",
    date: ""
  });
  const [modalOpeningStatus, setModalOpeningStatus ] = useState(false);

  const { firstName, lastName, email, phone, amount, fromLocation,dropLocation,noOfDays, date} =
    user;

  const openDialog=()=>{
      setModalOpeningStatus(true);
  }
  
  const closeDialog=()=>{
    setModalOpeningStatus(false);
  }

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async (e) => {
    e.preventDefault();
    if(validate()){
    const response = await axios.post("http://localhost:8080/booking", user);
    if(response.status===200){
      console.log(user);
      console.log("success");
      navigate('/payment');
      //openDialog();
  }
}
else{
  alert("Invalid Details");
}

  };

  return (
    <div>

    
    <form onSubmit={(e) => onSubmit(e)} name="myform" className="mt-5">
      <FormGroup className="booking__form d-inline-block me-1 mb-4 ">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
         
          onChange={(e) => onInputChange(e)}
        />
        <label className="form-label" htmlFor="form3Example1cg" id="firstName" style={{ color: 'red' }} ></label>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
         
          onChange={(e) => onInputChange(e)}
        />
        <label className="form-label" htmlFor="form3Example1cg" id="lastName" style={{ color: 'red' }} ></label>
      </FormGroup>

  

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
          <label className="form-label" htmlFor="form3Example1cg" id="phone" style={{ color: 'red' }} ></label>

      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Amount Of Car"
          name="amount"
          value={amount}
          
          onChange={(e) => onInputChange(e)}
        />
          <label className="form-label" htmlFor="form3Example1cg" id="amount" style={{ color: 'red' }} ></label>

      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="From Location"
          name="fromLocation"
          value={fromLocation}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="Drop Location"
          name="dropLocation"
          value={dropLocation}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
         <label className="form-label" htmlFor="form3Example1cg" id="email" style={{ color: 'red' }} ></label>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input
          type="number"
          placeholder="Number Of Days"
          name="noOfDays"
          value={noOfDays}
          
          onChange={(e) => onInputChange(e)}
        />
          <label className="form-label" htmlFor="form3Example1cg" id="noOfDays" style={{ color: 'red' }} ></label>

      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="date"
          placeholder="Journey Date"
          className="date"
          name="date"
          value={date}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <br />
      <button type="submit" className="btn btn-primary d-inline-block me-4 mb-4">
          Book Car
        </button>
      
    </form>
    <Modal show={modalOpeningStatus} onHide={closeDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Application form Sumbitted!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Now Go For The Payment</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeDialog}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default BookingForm;
function validate() {

  var firstName =
      document.forms.myform.firstName.value;

  var lastName =
      document.forms.myform.lastName.value; 
      
  var contact =
      document.forms.myform.phone.value;

  var amount=
      document.forms.myform.amount.value;
 
  var email =
      document.forms.myform.email.value;

  var noOfDays =
     document.forms.myform.noOfDays.value;
  
 
  var regName = /^[a-zA-Z]{1,}$/;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regContact = /^[789][0-9]{9}$/;
  var regAmount=/^[0-9]{2,10}$/;
  var regNoOfDays=/^[0-9]{1,4}$/;


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

  msg = document.getElementById("phone");
  if (contact == "" || !regContact.test(contact)) {
      msg.innerHTML = " *Please enter a valid phone number";
      return false;
  }
  msg.innerHTML = "";

  msg = document.getElementById("amount");
  if (amount == "" || !regAmount.test(amount)|| amount<0) {
      msg.innerHTML = " *Please enter a valid amount";
      return false;
  }
  msg.innerHTML = "";
  
  msg = document.getElementById("email");
  if (email == "" || !regEmail.test(email)) {
      msg.innerHTML = " *Please enter a valid email";
      return false;
  }
  msg.innerHTML="";

  msg = document.getElementById("noOfDays");
  if (noOfDays == "" || !regNoOfDays.test(noOfDays) || noOfDays<0) {
      msg.innerHTML = " *Please enter a valid Days";
      return false;
  }
  


  return true;
}