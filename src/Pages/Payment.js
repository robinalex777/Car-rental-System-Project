import React, { useEffect, useState } from "react";
import "../css/payment.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Navbar3 from "../Components/Navbar3";
import Footer from "../Components/Footer";
import emailjs from '@emailjs/browser';

export default function Payment() {
  const navigate=useNavigate();
  const adminObj = JSON.parse(localStorage.getItem("user"));
      useEffect(()=>{
        if(adminObj==null){
          navigate('/login');
        }
       
      },[])
    const [user, setUser] = useState({
        name:"",
        date:"",
        amount:"",
      });
       
      
        const [email, setEmail] = useState();
        const [totalAmount, setTotalAmount] = useState();
      const { name,  date, amount} = user;
    
      const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        
        
      };
      const onChange1 = (e) => {
       
        setEmail(e.target.value);
        
      };
    
    
      const onSubmit = async (e) => {
        e.preventDefault();
        console.log(adminObj.id);
        user.amount=totalAmount;



        await axios.post(`http://localhost:8080/payment/${adminObj.id}`, user);
        console.log(user);
        console.log("success payment");

        emailjs.send('service_6ldntpk', 'template_lf21b2b', { Name:user.name, Amount: user.amount, Date: user.date,Email:adminObj.email }, 'hIV0DNh15aWiAk4S5').then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });

        alert("payment done successfully");
        navigate('/bill');

      };

      const onSubmitForAmount = async (e) => {
        e.preventDefault();
        
        const result = await axios.get(`http://localhost:8080/booking/byemail/${email}`);
        console.log(result);
        const user1 = result.data;
        console.log(user1);
        const payAmount = user1.amount;
        const rentDay = user1.noOfDays;
       
        setTotalAmount(payAmount*rentDay);
        setUser({[amount]:totalAmount});
        console.log(totalAmount);
        
      };

      useEffect(() => {
        onSubmitForAmount();
      }, []);

  return (
    <div>

      <Navbar3></Navbar3>
      <div className="container  px-5" style={{ paddingTop: '20px' }}>
        <div className="mb-4 mt-5">
          <h2>Confirm order and pay</h2>
          <span>
            please make the payment, after that you can enjoy all the features
            and benefits.
          </span>
        </div>
        <div className="row">
        
          <div className="col-md-8">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="card p-3">
              <h6 className="text-uppercase">Payment details</h6>
              <div className="inputbox mt-3">
                
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required="required"
                  value={name} 
                  onChange={(e) => onChange(e)}
                />
                <span>Name on card</span>{" "}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    {" "}
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />{" "}
                    <i className="fa fa-credit-card" /> <span>Card Number</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>Expiry</span>
                    </div>
                    <div className="inputbox mt-3 mr-2">
                      
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>CVV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>Street Address</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                      <span>City</span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={date} 
                        onChange={(e) => onChange(e)}
                        required="required"
                      />
                      <span />
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-between">
              <span>Payment Gateway </span>
              
              <button className="btn btn-success px-3">Payment</button>
            </div>
            </form>
          </div>
          
          <div className="col-md-4">
            <div className="card card-blue p-3 text-white mb-3">
              <span>You have to pay</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">Rs {totalAmount}</h1> <span>.00</span>
              </div>
              <span>
                Enjoy all the features and perk after you complete the payment
              </span>
              <a href="#" className="yellow decoration">
                Know all the features
              </a>
              <div className="hightlight">
                <span>
                  100% Guaranteed support and update for the next 5 years.
                </span>
              </div>
            </div>
            <div className="row mt-3">
                  <div className="col-md-8">
                    <div className="inputbox mt-3 mr-5">
                      
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required="required"
                        value={email} 
                        onChange={(e) => onChange1(e)}
                      />
                      <span>Email</span>
                    </div>
                  </div>
                  <div className="mt-4 mb-4 d-flex justify-content-between">
                  
                  <button className="btn btn-success px-3"onClick={(e) => onSubmitForAmount(e)}>Verify</button>
                </div>
                </div>
          </div>
          
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}




