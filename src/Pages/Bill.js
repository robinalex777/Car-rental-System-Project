import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Navbar3 from "../Components/Navbar3";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export default function () {
    const [bill, setBill] = useState([]);
    const[money,setMoney]=useState([]);

    const navigate=useNavigate();
  const adminObj = JSON.parse(localStorage.getItem("user"));
      useEffect(()=>{
        if(adminObj==null){
          navigate('/login');
        }
       
      },[])

    async function getAllBill() {
        const response = await axios.get(`http://localhost:8080/payment`);
        setBill(response.data);
    }

    async function getAllMoney() {
        const response = await axios.get(`http://localhost:8080/car`);
        setMoney(response.data);
    }



    useEffect(() => {
        getAllBill();
        getAllMoney();
    }, []);

  return (
    <div>
      <div className="container-fluid">
      <Navbar3></Navbar3>
      </div>
       {/* <MDBContainer className="mt-0">
      <MDBCard>
        <MDBCardBody className="mx-4">
          <MDBContainer> */}
          <div className="container">
            <p className="my-5 mt-5 text-center" style={{ fontSize: "50px",height:"100px"}}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              Thanks for booking
            </p></div>
            {/* <MDBRow>
              <MDBTypography listUnStyled>
                <li className="text-black">John Doe</li>
                <li className="text-muted mt-1">
                  <span className="text-black">Invoice</span> #12345
                </li>
                <li className="text-black mt-1">April 17 2021</li>
              </MDBTypography>
              <hr />
              <MDBCol xl="10">
                <p>Pro Package</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$199.00</p>
              </MDBCol>
              <hr />
            </MDBRow>
            <MDBRow>
              <MDBCol xl="10">
                <p>Consulting</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$100.00</p>
              </MDBCol>
              <hr />
            </MDBRow>
            <MDBRow>
              <MDBCol xl="10">
                <p>Support</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$10.00</p>
              </MDBCol>
              <hr style={{ border: "2px solid black" }} />
            </MDBRow>
            <MDBRow className="text-black">
              <MDBCol xl="12">
                <p className="float-end fw-bold">Total: $10.00</p>
              </MDBCol>
              <hr style={{ border: "2px solid black" }} />
            </MDBRow>
            <div className="text-center" style={{ marginTop: "90px" }}>
              <a>
                <u className="text-info">View in browser</u>
              </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div> */}
          {/* </MDBContainer>
        </MDBCardBody>
      </MDBCard> */}
     {/* </MDBContainer> */}
     <div className="mb-0">
    <Footer></Footer></div>
    </div>
  )
}
