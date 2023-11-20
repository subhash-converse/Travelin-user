import React from "react";
import card from "../../Assets/Images/BookingImages/card.png"

const CardPayment = () => {
  return (
    <div className="md:flex">
      <form action="" className="text-[#777777] text-[15px]">
        <div className="md:flex w-full gap-[35px]">
          <div className="w-full">
            <label htmlFor="CardHolderNumber">Card Holder Number</label>
            <input
              type="number"
              id="CardHolderNumber"
              className="booking-input w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="CardNumber">Card Number</label>
            <input
              type="text"
              id="CardNumber"
              placeholder="**** **** **** ****"
              className="booking-input w-full"
            />
          </div>
        </div>
        <div className="md:flex w-full gap-[35px]">
          <div className="w-full">
            <label htmlFor="ExpiryDate">Expiry Date</label>
            <input
              type="text"
              id="ExpiryDate"
              placeholder="Expiry Date"
              className="booking-input w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="CVC/CVV">CVC/CVV</label>
            <input
              type="text"
              id="CVC/CVV"
              placeholder="CVC/CVV"
              className="booking-input w-full"
            />
          </div>
        </div>
      </form>
      <div>
        <img src={card} alt="" className="px-[15px]"/>
      </div>
    </div>
  );
};

export default CardPayment;
