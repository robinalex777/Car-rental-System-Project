import React, { Component } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Home from "./Home";
import Navbar3 from "../Components/Navbar3";


export class Login extends Component {


    constructor() {
        super();
        this.state = {
            formData: {},
            modalOpeningStatus: false,
            modalOpeningStatus1: false,
        };
    }

    openDialog = () => {

        this.setState({ modalOpeningStatus: true });
    };

    closeDialog = () => {
        this.setState({ modalOpeningStatus: false });
    };

    openDialog1 = () => {
        this.setState({ modalOpeningStatus1: true });
    };

    closeDialog1 = () => {
        this.setState({ modalOpeningStatus1: false });
    };

    handleChange = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value,
            },
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:8080/user", this.state.formData);
        console.log(response.data);
        //const user = response.data;
        //const navigate = useNavigate();
        if (response.status === 200) {
            if (response.data != "") {
                if (response.data.email) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    console.log(JSON.parse(localStorage.getItem("user")));
                    this.openDialog1();
                 
                    return;
                } else {
                    this.openDialog();
                    return;
                }
            } else {
                this.openDialog();
                return;
            }
        }


    };

    render() {
        return (
            <div>
             <Navbar3></Navbar3>
             <br></br>
             <br></br>
                <div>
                    <section className="vh-100" style={{ backgroundColor: "gray" }}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-xl-10">
                                    <div className="card" style={{ borderRadius: "1rem" }}>
                                        <div className="row g-0">
                                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                                <img
                                                    src="http://localhost:3000/static/media/layoutcard2.7acdea745b8e91521237.png"
                                                    alt="login form"
                                                    className="img-fluid"
                                                    style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                                                />
                                            </div>
                                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                                <div className="card-body p-4 p-lg-5 text-black">
                                                    <form onSubmit={this.handleSubmit}>
                                                        <div className="d-flex align-items-center mb-3 pb-1">
                                                            <i
                                                                className="fas fa-cubes fa-2x me-3"
                                                                style={{ color: "#ff6219" }}
                                                            />
                                                            <span className="h1 fw-bold mb-0">User Login</span>
                                                        </div>
                                                        <h5
                                                            className="fw-normal mb-3 pb-3"
                                                            style={{ letterSpacing: "1px" }}
                                                        >
                                                            Signin  your account
                                                        </h5>
                                                        <div className="form-outline mb-4">
                                                            <input
                                                                type="email"
                                                                id="form2Example17"
                                                                name="email"
                                                                onChange={this.handleChange}
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label
                                                                className="form-label"
                                                                htmlFor="form2Example17"
                                                            >
                                                                Email address
                                                            </label>
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <input
                                                                type="password"
                                                                id="form2Example27"
                                                                name="password"
                                                                onChange={this.handleChange}
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label
                                                                className="form-label"
                                                                htmlFor="form2Example27"
                                                            >
                                                                Password
                                                            </label>
                                                        </div>
                                                        <div className="pt-1 mb-4">

                                                            <button
                                                                className="btn btn-dark btn-lg btn-block"
                                                                type="submit"
                                                            >
                                                                Login
                                                            </button>


                                                        </div>
                                                        <Link to={"/forgotPass"} style={{ textDecoration: 'none' }}>
                                                            Forgot password?
                                                        </Link>
                                                        <p
                                                            className="mb-5 pb-lg-2"
                                                            style={{ color: "#393f81" }}
                                                        >
                                                            Don't have an account?{" "}
                                                            <Link to={"/register"} style={{ color: "#393f81" }}>
                                                                Register here
                                                            </Link>
                                                        </p>
                                                        <a href="#!" className="small text-muted">
                                                            Terms of use.
                                                        </a>
                                                        <a href="#!" className="small text-muted">
                                                            Privacy policy
                                                        </a>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal show={this.state.modalOpeningStatus} onHide={this.closeDialog}>
                            <Modal.Header closeButton>
                                <Modal.Title>Invalid Credentials</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Check Your Email And Password</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.closeDialog}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal
                            show={this.state.modalOpeningStatus1}
                            onHide={this.closeDialog1}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Login Successfull</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h3>Done</h3>
                                <br />
                                <Link to={"/"}>
                                    <Button className="btn btn-primary">
                                        Go to Home
                                    </Button>
                                </Link>


                            </Modal.Body>
                        </Modal>
                    </section>
                </div>
            </div>
        );
    }
}