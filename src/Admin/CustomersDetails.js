import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import axios from 'axios';
import SideNavBar1 from "../Components/SideNavBar1";
import { useNavigate } from "react-router-dom";


export function CustomersDetails() {

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
        const response = await axios.get(`http://localhost:8080/user`);
        setapplicantsList(response.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        getAllapplicants();
      };
   
    

    useEffect(() => {
        getAllapplicants();
    }, []);

    return (
        <>
            <SideNavBar1/>
            <h1 style={{ textAlign: 'center' }}>Customer Detail</h1>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow table-hover">
                        <thead>
                            <tr className="bg-info text-white">
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                                <th scope="col">Driving Licence Number</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { applicantsList.map((applicant, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{applicant.firstName}</td>
                                    <td>{applicant.lastName}</td>
                                    <td>{applicant.email}</td>
                                    <td>{applicant.age}</td>
                                    <td>{applicant.drivingLicNo}</td>
                                    <td>+91-{applicant.phone}</td>


                                    <td>

                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteUser(applicant.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
