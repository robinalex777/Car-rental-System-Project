import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../css/style.css";

export default function FindCar() {
    const [location, setLocation] = useState();

    const onLocationChange = (e) => {
        setLocation(e.target.value);
      };
      const userObject=localStorage.getItem("user");
      const navigate=useNavigate();
      const handleBook=()=>{
        if(userObject==null){
          alert("You Have To Login First");
          navigate('/login');
        }
        else{
          navigate(`/searchcar/${location}`);
        }
      }
  return (
    <div>
        
        <header id="header">
        <div className="container  align-items-center bg-image shadow-2-strong" id="intro">
          <div className="container d-flex align-items-center justify-content-center w-50">
            <div className="col m-3">
              <h1 className="mt-2">
                The perfect car for your next journey is just around the corner
              </h1>
             
            </div>
          </div>
          <div id="booking" className="section">
            <div className="section-center">
              <div className="container">
                <div className="row">
                  <div className="booking-form">
                    <form >
                      <div className="form-group">
                        <select className="form-control" value={location} 
                        onChange={(e) => onLocationChange(e)}>
                          <option value>-------------Select City-------------</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="pune">Pune</option>
                          <option value="delhi">Delhi</option>
                          <option value="hyderabad">Hyderabad</option>
                          <option value="goa">Goa</option>
                        </select>
                        <span className="form-label">Destination</span>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Number of days to rent"  required />
                            <span className="form-label">Days to rent</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" type="date" required />
                            <span className="form-label">Journey date</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" type="time" placeholder="Journey time" required />
                            <span className="form-label">Journey time</span>
                          </div>
                        </div>
                        <div className="form-btn">
                           
                            <button type='submit' className="submit-btn" onClick={handleBook}>Book Now</button>
                           
                          
                        </div>
                      </div></form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></header>

    </div>
  )
}
