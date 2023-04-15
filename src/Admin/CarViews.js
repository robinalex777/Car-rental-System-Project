import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import SideNavBar1 from "../Components/SideNavBar1";


export function CarViews() {
    const navigate = useNavigate();
    const adminObj = JSON.parse(localStorage.getItem("admin"));
    useEffect(()=>{
      if(adminObj==null){
        navigate('/adminlogin');
      }
     
    },[])

    const [applicantsList, setapplicantsList] = useState([]);
    const [selectedapplicantName, setselectedapplicantName] = useState('');
    const [isModalOpened, setIsModalOpened] = useState(false);


    const openModal = () => {
        setIsModalOpened(true);
    }
    const closeModal = () => {
        setIsModalOpened(false);
    }
    async function getAllapplicants() {
        const response = await axios.get(`http://localhost:8080/car`);
        setapplicantsList(response.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/car/${id}`);
        getAllapplicants();
    };



    useEffect(() => {
        getAllapplicants();
    }, []);

    return (
        <>
        <SideNavBar1></SideNavBar1>
            <div className="container">
                <div className="py-4">
                    <table className="table table-hover">
                        <thead>
                            <tr className="bg-info text-white">
                                <th scope="col">S.N</th>
                                <th scope="col">Car Id</th>
                                <th scope="col">Car Name</th>
                                <th scope="col">Fuel Type</th>
                                <th scope="col">Seats</th>
                                <th scope="col">Location</th>
                                <th scope="col">Driven KM</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Image Url</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicantsList.map((applicant, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{applicant.carId}</td>
                                    <td>{applicant.carName}</td>
                                    <td>{applicant.fuelType}</td>
                                    <td>{applicant.seats}</td>
                                    <td>{applicant.location}</td>
                                    <td>{applicant.drivenKm}</td>
                                    <td>{applicant.amount}</td>
                                    <td>{applicant.imageUrl}</td>
                                    <td>{applicant.quantity}</td>

                                    <td>
                                        {/*<Link
                                            className="btn btn-primary mx-2"
                                            to={`/viewmenu/${menu.id}`}
                                        >
                                            View
                                         </Link>*/}
                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/caredit/${applicant.carId}`}
                                        >
                                            Edit
                                        </Link>
                                        </td>
                                        <td>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteUser(applicant.carId)}
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