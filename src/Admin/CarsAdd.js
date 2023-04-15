import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideNavBar1 from '../Components/SideNavBar1';
import { useEffect } from 'react';
export default function CarsAdd() {

    let navigate = useNavigate();
    
    const adminObj = JSON.parse(localStorage.getItem("admin"));
    useEffect(()=>{
      if(adminObj==null){
        navigate('/adminlogin');
      }
     
    },[])

    const [user, setUser] = useState({
      carName:"",
      fuelType:"",
      seats:"",
      location:"",
      drivenKm:"",
      amount:"",
      carInfo:"",
      imageUrl:"",
      quantity:""
    });
  
    const { carName, fuelType, seats, location, drivenKm, amount,
    carInfo, imageUrl, quantity} = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post("http://localhost:8080/car", user);
      if(res.status==200){
        console.log(user.carName);
        console.log(user);
        console.log("success");
        navigate("/adminhome");
      }
      
    };

  return (
    <div>
     <SideNavBar1/>
    {/* Section: Design Block */}
    <section className="text-center">
      {/* Background image */}
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbootstrap.com/img/new/textures/full/179.jpg")',
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
              <h2 className="fw-bold mb-5">Car Add</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        name="carName"
                        value={carName} 
                        onChange={(e) => onInputChange(e)}
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        Car Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                        name="fuelType"
                        value={fuelType} 
                        onChange={(e) => onInputChange(e)}
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        FuelType
                      </label>
                    </div>
                  </div>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="form3Example3"
                    className="form-control"
                    name="seats"
                    value={seats} 
                    onChange={(e) => onInputChange(e)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Seats
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example4"
                    className="form-control"
                    name="location"
                    value={location} 
                    onChange={(e) => onInputChange(e)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Location
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example5"
                    className="form-control"
                    name="drivenKm"
                    value={drivenKm} 
                    onChange={(e) => onInputChange(e)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                  DrivenKm
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example6"
                    className="form-control"
                    name="amount"
                    value={amount} 
                    onChange={(e) => onInputChange(e)}
                    
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Per Day Rent
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example7"
                    className="form-control"
                    name="carInfo"
                    value={carInfo} 
                    onChange={(e) => onInputChange(e)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Car Information
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control"
                    name="imageUrl"
                    value={imageUrl} 
                    onChange={(e) => onInputChange(e)}
                    
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Image URL
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="form3Example9"
                    className="form-control"
                    name="quantity"
                    value={quantity} 
                    onChange={(e) => onInputChange(e)}
                    
                  />
                  <label className="form-label" htmlFor="form3Example3">
                  Cars Quantity
                  </label>
                </div>

                {/* Submit button */}
                <a href='google.com'>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  
                >
                  Add
                </button>
                </a>
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

