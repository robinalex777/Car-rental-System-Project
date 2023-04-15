import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const CarItem = (car) =>{
    return (
    <div className='col-lg-4 col-sm-2 mb-5'>
      <div className="card shadow-sm">
        <img src={car.imageUrl} alt={car.carName}/>
        <div className="card-body">
          <p className="card-text" /><h3>{car.carName}</h3>
          <h5>Manual.Petrol . {car.fuelType}</h5>
          <h6>{car.drivenKm}k kms driven</h6>
          <h5>At {car.location}</h5>
          <h3>Rating : ⭐⭐⭐⭐</h3><p />
          <h2>₹{car.amount} per Day</h2>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/cars/${car.carId}`}><button type="button" className="btn btn-sm btn-outline-secondary">Book Now</button></Link>
            </div>
            <small className="text-muted" />
          </div>

          
      </div>
    </div>
    
  </div>
    )
}

export default function CarListAll() {

  const navigate=useNavigate();
  const adminObj = JSON.parse(localStorage.getItem("user"));
      useEffect(()=>{
        if(adminObj==null){
          navigate('/login');
        }
       
      },[])
    const [carList, setCarList] = useState([]);
    async function getAllCars() {
        const response = await axios.get("http://localhost:8080/car");
        const resultdata = response.data;
        setCarList(resultdata);
    }
    console.log(carList);
    useEffect(() => {
        getAllCars();
    }, []);
    
    return (
        
        <div className='container mt-5'>
            <div className='row'>
            {carList.map(CarItem)};
            </div>
            
        </div>
    )
}
