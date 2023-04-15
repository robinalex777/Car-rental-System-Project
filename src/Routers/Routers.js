import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AdminLogin } from '../Admin/AdminLogin'


import { BookingView } from '../Admin/BookingView'
import CarEdit from '../Admin/CarEdit'
import CarsAdd from '../Admin/CarsAdd'
import { CarViews } from '../Admin/CarViews'
import { CustomersDetails } from '../Admin/CustomersDetails'
import { PaymentsView } from '../Admin/PaymentsView'
import Footer from '../Components/Footer'
import Footers from '../Components/Footers'
import SideNavBar1 from '../Components/SideNavBar1'
import About from '../Pages/About'
 import Admin from '../Pages/Admin'
import Bill from '../Pages/Bill'
import CarDetails from '../Pages/CarDetails'
import CarListAll from '../Pages/CarListAll'
import ContactUs from '../Pages/ContactUs'
import FindCar from '../Pages/FindCar'
import ForgotPassword from '../Pages/ForgotPassword'
import Home from '../Pages/Home'
import Insurance from '../Pages/Insurance'
import { Login } from '../Pages/Login'
import Payment from '../Pages/Payment'
import Policies from '../Pages/Policies'
import Register from '../Pages/Register'
import SearchCar from '../Pages/SearchCar'

export default function Routers() {
  return (
    <div>
      
        <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/findcar" element={<FindCar/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<CarListAll />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/addcar" element={<CarsAdd />} />
            
            <Route path="/payment" element={<Payment/>} />
            <Route path="/searchcar/:location" element={<SearchCar/>}/>
            <Route path="/adminhome" element={<Admin />} />
            
            <Route path="/adminlogin" element={<AdminLogin/>} />
            <Route path="/admincarsadd" element={<CarsAdd/>} />
            <Route path="/admincustomerdetails" element={<CustomersDetails/>} />
            <Route path="/bookingview" element={<BookingView/>} />
            <Route path="/paymentsview" element={<PaymentsView/>} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/footer" element={<Footer/>} />
            <Route path="/footers" element={<Footers/>} />
            <Route path="/carview" element={<CarViews/>}/>
            <Route path="/caredit/:id" element={<CarEdit/>}/>
            <Route path="/sidenav" element={<SideNavBar1/>}/>
            <Route path="/bill" element={<Bill/>}/>
            <Route path='/forgotPass' element={<ForgotPassword/>}/>
         </Routes>
       
        
        
        </BrowserRouter>
    </div>
  )
}
