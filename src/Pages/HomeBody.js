import React from 'react'
import aniket from '../images/layout.jpg';
import lay1 from '../images/layoutcard1.png';
import lay2 from '../images/layoutcard2.png';
import lay3 from '../images/layoutcard3.png';
import FindCar from './FindCar';
export default function HomeBody() {
  return (
    <div>
             <section>
      <div className="container mt-5">
        <section>
          <div className="row">
            <div className="col-md-6 gx-5 mb-4">
              <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img src={aniket} className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
            </div>
            <div className="col-md-6 gx-5 mb-4">
              <h4><strong>Largest car sharing marketplace</strong></h4>
              <p className="text-muted">
                Sedans for short distances, SUVs for tough terrains, luxury cars for surprises - we’ve got it all!
              </p>
              <p><strong>About Our marketplace</strong></p>
              <p className="text-muted">
                Our car is India’s largest marketplace for cars on rent. From short road trips to quick in-city drives for groceries, 
                supply pick-up, food runs, we have the cheapest car rental options for all your needs!
                A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.
              </p>
            </div>
          </div>
        </section>
        <hr className="my-5" />
        <section className="text-center">
          <h2 className="mb-5"><strong>UNMATCHED BENEFITS</strong></h2>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src={lay1} className="img-fluid" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Enjoy Unlimited Kilometers</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src={lay2} className="img-fluid" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Zero Security Deposit</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src={lay3} className="img-fluid" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Free Cancellation before 6 hrs</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
      </section>
    </div>
  )
}
