import React from 'react'
import Navbar3 from '../Components/Navbar3'
import Footer from '../Components/Footer'
import { Row } from 'reactstrap'
import Accordion1 from './Accordion1'
 
function ContactUs(props) {
  return (
    <>
      <Navbar3 />
      <header id="contact-header" >
        <div id="contact" className="container align-items-center "  >
          <div className="col m-3">
            <h1 className="mt-2 align-content-center">
              Contact Us
            </h1>
          </div>
        </div>
      </header>
      <div className="container mt-5 align-items-center">


        <h3 style={{ textAlign: 'center' }}>
          Let's Start a Conversation.
        </h3>
        <div className="container-fluid mt-5 row align-items-center">
          <div className="container col-6">
            <form className="text-center border border-light p-5" action="#!">
              <p className="h4 mb-4">Contact us</p>
              <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />
              <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
              <label>Subject</label>
              <select className="browser-default custom-select mb-4">
                <option value disabled>Choose option</option>
                <option value={1} selected>Feedback</option>
                <option value={2}>Report a bug</option>
                <option value={3}>Feature request</option>
                <option value={4}>Feature request</option>
              </select>
              <div className="form-group">
                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows={3} placeholder="Message" defaultValue={""} />
              </div>
              <div className="custom-control custom-checkbox mb-4">
                <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
                <label className="custom-control-label" htmlFor="defaultContactFormCopy">Send me a copy of this message</label>
              </div>
              <button className="btn btn-info btn-block" type="submit">Send</button>
            </form>

          </div>

          <div className="container col-6 map1">
            <div className="row-6 justify-content-center d-flex">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d197169.4690893715!2d72.9468073523536!3d19.062373486276574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scar%20rental!5e0!3m2!1sen!2sin!4v1678004651065!5m2!1sen!2sin" width={400} height={350} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


            </div>
            <div className=" row-6 ">
              <div className="row" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '70%' }}>
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3 text-secondary" />SANTCRUZ, MUMBAI 400010, MH</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
              </div>
            </div>            
          </div>
        </div>
        <Accordion1/>
        <Footer/>
      </div>
      <div>
     </div>
    </>
  )
};

ContactUs.propTypes = {}

export default ContactUs;