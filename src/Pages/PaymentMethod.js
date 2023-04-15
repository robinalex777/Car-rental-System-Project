import React from "react";
import { Link } from "react-router-dom";

import "../css/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> UPI Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment"/> Master Card
        </label>  
      </div>
      <div className="payment text-end mt-5">
        <Link to={`/payment`}>
          <button>Reserve Now</button>
        </Link>
        
      </div>
    </>
  );
};

export default PaymentMethod;
