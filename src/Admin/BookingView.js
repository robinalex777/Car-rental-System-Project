

import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import axios from 'axios';
import SideNavBar1 from "../Components/SideNavBar1";
import { useNavigate } from "react-router-dom";


export function BookingView() {

  const navigate = useNavigate();
  const adminObj = JSON.parse(localStorage.getItem("admin"));
  useEffect(()=>{
    if(adminObj==null){
      navigate('/adminlogin');
    }
   
  },[])

    const [applicantsList, setapplicantsList] = useState([]);
    const [selectedapplicantName, setselectedapplicantName] = useState('');
    const [isModalOpened,setIsModalOpened] = useState(false);
   

    const openModal = ()=>{
        setIsModalOpened(true);
    }
    const closeModal = ()=>{
        setIsModalOpened(false);
    }
    async function getAllapplicants() {
        const response = await axios.get(`http://localhost:8080/booking`);
        setapplicantsList(response.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/booking/${id}`);
        getAllapplicants();
      };
   
    

    useEffect(() => {
        getAllapplicants();
    }, []);

    return (
        <>
        
        
                <Alert style={{textAlign:"center"}}>
                     <h1>All  Bookings</h1>
                </Alert>
           
      
      <div className="py-4 ">
        <div><SideNavBar1/></div>
      <div className="container-fluid mx-5">
        <table className="table table-hover">
          <thead>
            <tr className="bg-info text-white">
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Emails</th>
              <th scope="col">Phone</th>
              <th scope="col">Amount</th>
              <th scope="col">fromLocation</th>
              <th scope="col">dropLocation</th>
              <th scope="col">noOfDays</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            { applicantsList.map((applicant) => {
                                return (
                                    <tr>
                                        <td>{applicant.firstName}</td>
                                        <td>{applicant.lastName}</td>
                                        <td>{applicant.email}</td>
                                        
                                        <td>+91-{applicant.phone}</td>
                                        <td>{applicant.amount}</td>
                                        <td>{applicant.fromLocation}</td>
                                        <td>{applicant.dropLocation}</td>
                                        <td>{applicant.noOfDays}</td>
                                        <td>{applicant.date}</td>
                                        
                                    </tr>
                                )
                            })
                        }
          </tbody>
        </table>
        </div>
      </div>
    
            
            
        </>
    );
}