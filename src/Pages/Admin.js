import React from 'react'
import PropTypes from 'prop-types'
import ad1 from '../images/male-1354358_1280.png'
import ad2 from '../images/images.jpeg'
import ad3 from '../images/download.png'
import ad4 from '../images/renting-a-new-or-used-car-car-rental-booking-vector-21214122.jpg'
import ad5 from '../images/73002933.jpg'
import Navbar from '../Components/Navbar3'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import SideNavBar1 from '../Components/SideNavBar1'
import { useEffect } from 'react'

function Admin(props) {
  const navigate = useNavigate();
  const adminObj = JSON.parse(localStorage.getItem("admin"));
  useEffect(() => {
    if (adminObj == null) {
      navigate('/adminlogin');
    }

  }, [])
  return (
    <div>
      <SideNavBar1 />

      <div className="container my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ height: "250px" }}
               alt="ad1" />
              <div className="card-body">
                <h1>User:</h1>
                
                <p className="card-text">
                  Get the car of your dreams on rent for the amazing road trips..!
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to={"/admincustomerdetails"}>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ height: "250px" }} 
              alt="ad2" />
              <div className="card-body">
                <h1>Cars:</h1>
                <p className="card-text">
                  Get the car of your dreams on rent.
                </p>
                <br />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to={"/carview"}>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Car View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="https://images.pexels.com/photos/5835267/pexels-photo-5835267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                style={{ height: "250px" }} alt="ad3" />

              <div className="card-body">
                <h1>Payments:</h1>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to={"/paymentsview"}>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                style={{ height: "250px" }}
                 alt="ad4" />
              <div className="card-body">
                <h1>Booking:</h1>
                <p className="card-text">
                  Get the car of your dreams on rent fro the amazing road trips..!
                </p>
                
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to={"/bookingview"}>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                style={{ height: "250px" }}
                alt="ad5" />
              <div className="card-body">
                <h1>Add Car</h1>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to={"/admincarsadd"}>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Add
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<Footer/>*/}
    </div>
  )
}

Admin.propTypes = {}

export default Admin
