import React from 'react'
import PropTypes from 'prop-types'
import logo1 from '../images/icons8-facebook-48.png'
import logo2 from '../images/icons8-twitter-48.png'
import logo3 from '../images/icons8-instagram-48.png'
import logo4 from '../images/icons8-linkedin-circled-48.png'
import logo5 from '../images/icons8-github-30.png'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <div>
       <footer className="text-center text-lg-start bg-white text-muted ">
      
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-4 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/Budget/" target={'_blank'} >
              <img src={logo1} alt="facebook" />
            </a>
            <a href="https://twitter.com/budget/" target={'_blank'}>
              <img src={logo2} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/budget/" target={'_blank'}>
              <img src={logo3} alt="insta" />
            </a>
            <a href="https://in.linkedin.com/company/budget-car/" target={'_blank'}>
              <img src={logo4} alt="linkein" />
            </a>
            <a href="https://github.com/RahulD-Dac/Carrentel-front/" target={'_blank'}>
              <img src={logo5} alt="github" />
            </a>
          </div>
        </section>
        <section >
          <div className="container text-center text-md-start mt-5" style={{height:'200px'}}>
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
               
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />RentSelf
                </h6>
                <p>
                  Cars to rent in Bangalore | Cars to rent in Mumbai |
                  Cars to rent in Delhi NCR |Cars to rent in Chennai |
                  Cars to rent in Pune |Cars to rent in Hyderabad |Cars to rent in Chandigarh
                  |Cars to rent in Kolkata |Cars to rent in Ahmedabad
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
               
                <h6 className="text-uppercase fw-bold mb-4">
                  Our Company
                </h6>
                <p>
                <Link className="text-reset" to="/"> Blog </Link>
                  
                </p>
                <p>
                <Link className="text-reset" to="/about"> About </Link>
                </p>
                <p>
                  <a href="#!" className="text-reset">Browse Vehicles</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Career</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Help and Trust
                </h6>
                <p>
                <Link className="text-reset" to="/policies">Privacy policy </Link>

                  {/* <a href="#!" className="text-reset">Privacy policy</a> */}
                </p>
                <p>
                  <a href="#!" className="text-reset">Terms &amp; conditions</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Fraud alert</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Trust &amp; safety</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3 text-secondary" /> SANTCRUZ, MUMBAI 400010, MH</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@admin.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
              </div>
            </div>
          </div>
          <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://google.com/">google.com</a>
        </div>
        </section>
        
      </footer>
    </div>
  )
}
// import { Link } from "react-router-dom";
// import '../css/Footer.css';


// export function Footer() {
//     return (
//         <>
//             <link
//                 rel="stylesheet"
//                 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
//             <footer>
//                 <div className="foot1" style={{ boxShadow: "-2px -1px 5px white inset" }}>
//                     <div className="logo">
//                         <img src="logo.jpg" alt="" />
//                     </div>
//                     <div className="quick">
//                         <div className="footheading">
//                             <b><i>Quick Links</i></b>
//                         </div>
//                         <br/>
//                         <ul>
//                             <li><Link to='/'>Home</Link></li>
//                             <li><Link to='/about-us'>About Us</Link></li>
//                             <li><Link to='/services'>Services</Link></li>
//                             <li><Link to='/contact-us'>Contact Us</Link></li>
//                         </ul>
//                     </div>
//                     <div className="social">
//                         <div>
//                             <b className="findus footheading">
//                                 <i>Find us on</i>
//                             </b>
//                         </div>
//                         <br />
//                         <div className="sociallogo">
//                             <div>
//                                 <i className="fa fb">
//                                     <a href="https://www.facebook.com/cafecoffeeday/" target="_blank" rel="noreferrer"></a>
//                                 </i>
//                             </div>
//                             <br />
//                             <div>
//                                 <i className="fa insta">
//                                     <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fcafecoffeeday&h=AT3rkwBtvnlXigpvqC-uu0QHuD0JFosFnGO9CJuYRTh2WMp_oN2gTpDHL9uiimtQ-yWRG_gpO270ugpCQxaQ-9dnlVmRszeI-VfydCLJ4XsFbkPpoEhvsz_Mh1wIhECs2Jr4CQGytXGRiCfUn58ruvI1oQOtXFX8In6hiw" target="_blank" rel="noreferrer">{" "}</a>
//                                 </i>
//                             </div>
//                             <br />
//                             <div>
//                                 <i className="fa yt">
//                                     <a href="https://www.youtube.com/user/cafecoffeeday" target="_blank" rel="noreferrer">{" "}</a>
//                                 </i>
//                             </div>
//                             <br />
//                         </div>
//                     </div>
//                     <div className="loc">
//                         <div>
//                             <b className="bclass footheading">
//                                 <i>Our Location</i>
//                             </b>
//                         </div>
//                         <br />
//                         <div>
//                             <i className="fa">&nbsp;</i> Cafe Coffee Day, Devaraj Urs Road, Mysore City
//                             <br />
//                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
//                         </div>
//                         <div>
//                             <i className="fa">&nbsp;</i> 020 26362222 | 67292345
//                         </div>
//                         <div>
//                             <i className="fa">&nbsp;</i>{" "}
//                             <a href="mailto:cafecoffeday@gmail.com">
//                             cafecoffeday@gmail.com 
//                             </a>{" "}
//                         </div>
//                         <br />{" "}
//                     </div>
//                 </div>
//                 <div className="foot2">
//                     <div>Cafe Club © 2023. All Rights Reserved.</div>
//                 </div>
//             </footer>
//         </>
//     );
// }
