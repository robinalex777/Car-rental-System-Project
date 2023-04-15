import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Components/Navbar3'
import Footer from '../Components/Footer'


function About(props) {
  return (
    <div > 
      <Navbar/>
      <header id="intro1">
    <div id="contact" className="container mt-5 align-items-center ">
      <div className="col m-3 ">
        <h1 className="mt-2 align-content-center">
          About Us
        </h1>
      </div>
    </div>
  </header>
  <h3 className="ms-4 mt-5" /><h3/>
  <div className="container">
    <div className="row">
      <div className="card ms-4" style={{width: '30rem'}}>
        <div className="card-body ms-4">
          <h4 className="card-title mb-4">About Us</h4>
          <p className="card-text">
            Rentself is a developer of an online platform used to offer self-drive car rental services. It is a self-drive-focused car rental company allowing individuals to rent vehicles by the hour, day, and week. Its platform offers a wide range of cars ranging from hatchbacks to SUVs, sedans, and luxury on rent for hourly, daily, and weekly basis atall-inclusive prices that enable users to book cars using their mobile phones and travel as per their plans in a hassle-free manner.
          </p>
        </div>
      </div>
      <div className="card ms-4" style={{width: '30rem'}}>
        <img className="mt-3" src="https://media.istockphoto.com/id/988321834/photo/young-couple-buying-a-car.jpg?s=612x612&w=0&k=20&c=PsnTWHiDM_lCi85BlwJwlRYejVRteIB7QxLSy68ciMQ=" />
      </div>
    </div>
    <div className="row mt-5">
      <div className="card ms-4" style={{width: '30rem'}}>
        <img className=" mt-2 mb-2" src="https://media.istockphoto.com/id/1367965991/photo/house-model-with-agent-and-customer-discussing-for-contract-to-buy-get-insurance-or-loan-real.jpg?s=612x612&w=0&k=20&c=kdH3yxNrwnbRF33J8BAZsEVbKpW8vLF517ZWJ33CVt0=" />
      </div>
      <div className="card ms-4 " style={{width: '30rem'}}>
        <div className="card-body ms-4">
          <h4 className="card-title mb-4">Our Mission</h4>
          <p style={{width: 'fit-content'}}>
            No more worries about mileage, fuel costs, insurance, and car breakdowns because the self-drive cars from rentself offer the customers more control, privacy, and freedom. Book a self-drive car in any city you visit with the app on your phone and feel at home wherever you go. Our organization has enabled driving convenience for travellers around the country and is fast expanding its reach to cities.
            The business model of rentself not only revolves around sustainability but also caters to the market need for convenient self-drive mobility solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container mt-5 align-items-center  ">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
      <div className="col">
        <div className="card shadow-sm">
          <img src="https://cdn.pixabay.com/photo/2017/05/10/19/16/electric-charge-2301604__340.jpg" />
          <div className="card-body">
            <p className="card-text">You must never stop exploring! That’s why you get unlimited KMs with every booking!
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img src="https://cdn.pixabay.com/photo/2015/04/22/10/49/electric-car-734573__340.jpg" />
          <div className="card-body">
            <p className="card-text">Why pay for a full day when you need the car for only 8 hours? Rentself lets you rent a car for as low as 8 hours only!
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <img src="https://img.freepik.com/free-photo/traffic-tunnel_1359-9.jpg?size=626&ext=jpg" />
          <div className="card-body">
            <p className="card-text">Don’t put a limit to your travel plans - our long-duration bookings are here for you. Remember, the longer you book for, the more you save!
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
};

About.propTypes = {}

export default About
