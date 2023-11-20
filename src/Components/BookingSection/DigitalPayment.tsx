import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DigitalPayment = () => {
  return (
    <div className="text-[#777777] text-[16px]">
      <p>
        To make the payment process secure and complete you will be redirected
        to Paypal Website. 
      </p>
      <button className="text-[#029e9d]">Checkout via Paypal <span><FontAwesomeIcon icon={faArrowRightLong} /></span></button>
      <p className="font-medium">The total Amount you will be charged is:<span className="font-bold">$ 245.50</span> </p>
    </div>
  );
};

export default DigitalPayment;
