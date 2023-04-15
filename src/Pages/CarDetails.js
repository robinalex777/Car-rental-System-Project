import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Container, Row, Col } from "reactstrap";

import { useNavigate, useParams } from "react-router-dom";
import BookingForm from "./BokingForm";
import PaymentMethod from "./PaymentMethod";
import Navbar3 from "../Components/Navbar3";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";


const SingleCar = (singleCarItem) =>{
  return (
    <>
    <Navbar1></Navbar1>
    <section>
      <Container className="mt-5">
        <Row>
          <Col lg="6">
            <img src={singleCarItem.imageUrl} alt="" className="w-100" />
          </Col>

          <Col lg="6">
            <div className="car__info">
              <h2 className="section__title">{singleCarItem.carName}</h2>

              <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                <h6 className="rent__price fw-bold fs-4">
                  Rs{singleCarItem.amount}.00 / Day
                </h6>

                <span className=" d-flex align-items-center gap-2">
                  <span style={{ color: "#f9a826" }}>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  (Rating : ⭐⭐⭐⭐)
                </span>
              </div>

              <p className="section__description">
                {singleCarItem.carInfo}
              </p>

              <div
                className=" d-flex align-items-center mt-3"
                style={{ columnGap: "4rem" }}
              >
                <span className=" d-flex align-items-center gap-1 section__description">
                  <i
                    class="ri-roadster-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem.carName}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i
                    class="ri-settings-2-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem.fuelType}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i
                    class="ri-timer-flash-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem.drivenKm}
                </span>
              </div>

              <div
                className=" d-flex align-items-center mt-3"
                style={{ columnGap: "2.8rem" }}
              >
                <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                  {singleCarItem.location}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i
                    class="ri-wheelchair-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem.seats}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i
                    class="ri-building-2-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem.carName} Series
                </span>
              </div>
            </div>
          </Col>
      
          <div>
            <BookingForm />
          </div>

          {/* <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col> */}
        </Row>
      </Container>
    </section>


        
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
      
      </>
  )
}

const CarDetails = () => {

  const navigate=useNavigate();
  const adminObj = JSON.parse(localStorage.getItem("user"));
      useEffect(()=>{
        if(adminObj==null){
          navigate('/login');
        }
       
      },[])
 
  const [carItem, setCarItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    loadCar();
  }, []);

  const loadCar = async () => {
    const result = await axios.get(`http://localhost:8080/car/${id}`);
    setCarItem(result.data);
  };

  return (
      <div>
        <div>
        <div style={{background: 'url(https://thedriven.io/wp-content/uploads/2019/07/vw-evs.jpg)', height: '20vh'}} className="jumbotron bg-cover text-white">
    <div className="container py-5 text-center">
    <h1 className="display-4 font-weight-bold">Cars </h1>
    
  </div>
  </div>
        </div>
        {SingleCar(carItem)};
      </div>
  );
};

export default CarDetails;
