import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import insu1 from '../images/insu.jpeg'
 import Footer from '../Components/Footer'
 import Navbar3 from '../Components/Navbar3';



function Insurance() {
  return (
    <div>
      <Navbar3/>
      <Carousel variant="dark"  >
       <Carousel.Item >
        <img
          className="d-block h-40 w-100"
          src="https://cdn.pixabay.com/photo/2017/09/26/19/40/car-accident-2789841_1280.jpg"
          alt="First slide"
          style={{ height: '700px' }}
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-40 w-100"
          
          src="https://cdn.pixabay.com/photo/2021/05/10/10/19/car-crash-6243099_1280.jpg "
           alt="Second slide"
           style={{ height: '700px' }}
           />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-40 w-100"
          src="https://cdn.pixabay.com/photo/2022/11/30/17/04/car-7627218_1280.jpg"
          alt="Third slide"
          style={{ height: '69n0px' }}
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
      <div className="container my-5 "           style={{ height: '400px' }}
>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
          <div className="col">
            <div className="card shadow-sm">
              <img src={insu1} width="100%" height="300vh" />
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"style={{ height: '400px' }} >
            <div className="card shadow-sm">
              <div className="card-body" >
                <form method="POST" action="https://www.phonepe.com/insurance/motor-insurance/">
                  <table style={{ borderSpacing: '5px', margin: 'auto', borderColor: 'black' }}>
                    <tbody>                     

                      <tr>
                     
                      <td style={{ width: '60px' }} name="attributes">Booking Id</td>
                      <td>
                       

                        <input type="text" name="fnameP" id="fnameP" required minLength={3} autofocus /><span style={{ color: 'red', fontWeight: 700 }}>&nbsp;&nbsp;*</span>
                      </td>
                      <br></br>

                       

                    </tr>
                      <tr className="err">
                        <td />
                        <td>
                          <small id="fnP" style={{ color: 'rgb(249, 5, 5)', fontWeight: 700, backgroundColor: '#fafdfa99' }} />
                        </td>
                      </tr>
                      <br></br>
                      
                      <tr>
                        <td style={{ width: '100px' }} name="attributes" required minLength={3}>
                          Name:
                        </td>
                        
                        <td>
                          <input type="text" name="lnameP" id="lnameP" required minLength={3} /><span style={{ color: 'red', fontWeight: 700 }}>&nbsp;&nbsp;*</span>
                        </td>
                        <br></br>
                      </tr>
                      <tr className="err">
                        <td />
                        <td>
                          <small id="lnP" style={{ color: 'rgb(249, 5, 5)', fontWeight: 700, backgroundColor: '#fafdfa99' }} />
                        </td>
                      </tr>
                      <br></br>                    

                      <tr>
                        <td style={{ width: '100px' }} name="attributes" required minLength={3}>
                          Amount:
                        </td>
                        <td>
                          <input type="text" name="lnameP" id="lnameP" required minLength={3} /><span style={{ color: 'red', fontWeight: 700 }}>&nbsp;&nbsp;*</span>
                        </td>
                        <br></br>

                      </tr>
                      <br></br>
                      <tr>
                        <td style={{ width: '100px' }} name="attributes">
                          Vehicle type
                        </td>
                        <td>
                          <select id="inputDistrict">
                            <option value="SUV">SUV</option>
                            <option value="Sedan">Sedan</option>
                            <option value="LUV">LUV</option>
                          </select>
                        </td>
                      </tr>
                      <br></br>

 
                      <tr>
                        <td style={{ width: '100px' }} name="attributes">Extra Info</td>
                        <td><textarea type="textarea" rows={3} defaultValue={""} /></td>
                      </tr>
                      <br></br>

                      <tr>
                        <td colSpan={2} style={{ justifyContent: 'center', textAlign: 'center' }}>
                          <a href="https://www.phonepe.com/insurance/motor-insurance/car-insurance/"><button type="submit">Submit </button></a>
                        </td>
                      </tr>
                      <br></br>
 
                    </tbody></table>
                </form>
                <div className="d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </div>
  )
}



export default Insurance
