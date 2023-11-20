import React, { useState } from "react";

// <========== icons ==========>
import LastMainDeals from "../../Mock/PackageData";

// <========== icons ==========>
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

// ..............Images.................
import BoonNowLanding from "../BookingSection/BoonNowLanding";
import TravellerForm from "../BookingSection/TravellerForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faFaceLaughWink,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import CardPayment from "./CardPayment";
import DigitalPayment from "./DigitalPayment";

const BookNow = () => {
  const [onBtn, setOnBtn] = useState(true);

  const payment = (type: string) => {
    if (type === "card" && onBtn === false) {
      setOnBtn(true);
    } else if (type === "digital" && onBtn === true) {
      setOnBtn(false);
    } else {
      return;
    }
  };

  let currentUrl = window.location.href;
  let paramsVal = Number(currentUrl.split("/")[4]);

  let Datas = LastMainDeals[paramsVal];

  return (
    <>
      <div>
        <BoonNowLanding />
      </div>
      <div className="w-full">
        <div className="max-w-[1290px] pt-[48px] mx-auto lg:flex px-[15px] mb-[32px]">
          <div className="lg:w-[65%] px-[15px] mb-[30px]">
            <div>
              <TravellerForm />
            </div>

            <div className="rounded-xl">
              <div className="rounded-xl bg-[#f1f1f1] p-[24px] mb-[32px] flex">
                <FontAwesomeIcon
                  className="text-white bg-[#029E9D] my-auto px-[24px] py-[14px] rounded-xl"
                  style={{ fontSize: 30 }}
                  icon={faFaceLaughWink}
                />
                <div className="pl-6">
                  <h3 className="mb-2 text-[16px] Play-fair">Good To Know:</h3>
                  <p className="text-[#777777] text-[13.6px]">
                    Free Cancellation until 14:00 pn 11 Feb 2022
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[22px] border-b border-dashed mb-4 pb-4  text-[black] Play-fair">
                How Do You Want To Pay?{" "}
              </h3>
              <div className="payment-container flex flex-col gap-[10px] mb-[30px]">
                <button
                  className={`payment-btn ${onBtn ? "payment-true" : null}`}
                  onClick={() => {
                    payment("card");
                  }}
                >
                  Credit/Debit card
                </button>
                <button
                  className={`payment-btn ${!onBtn ? "payment-true" : null}`}
                  onClick={() => {
                    payment("digital");
                  }}
                >
                  Digital Payment
                </button>
              </div>
              <div>
                {onBtn ? (
                  <>
                    <h3 className="text-[18px] border-b border-dashed mb-4 pb-4  text-[black] Play-fair">
                      <span>
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          style={{ fontSize: 18 }}
                        />
                      </span>{" "}
                      Credit Card
                    </h3>
                    <CardPayment />
                  </>
                ) : (
                  <>
                    <h3 className="text-[18px] border-b border-dashed mb-4 pb-4  text-[black] Play-fair">
                      <span>
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          style={{ fontSize: 18 }}
                        />
                      </span>{" "}
                      Paypal
                    </h3>
                    <DigitalPayment />
                  </>
                )}
              </div>
              <div className="lg:flex items-center justify-between border-t-[2px] border-dashed mt-[24px] pt-[24px]">
                <div className="mb-[16px]">
                  <input type="checkbox" />
                  <span className="ml-1 text-[#777777] text-[16px]">
                    By continuing, you agree to the Terms and Conditions.
                  </span>
                </div>
                <div>
                  <button className=" button px-[24px] book-now ">
                    CONFIRM BOOKING
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[35%] lg:px-[15px] ">
            <div className="mb-[32px] p-[15px] shadow-booknow rounded-2xl">
              <h3 className="text-[22px]  mb-4  text-[black] Play-fair">
                Your Booking Details{" "}
              </h3>
              <div className="border-b border-dashed mb-4 pb-4 md:flex">
                <div className="rounded-xl md:mx-[15px] max-h-[300px] overflow-hidden w-full md:w-[150px] md:h-[88px] lg:h-[126px]">
                  <img
                    src="/HomePage/destination2.jpg"
                    className="rounded-xl"
                    alt=""
                  />
                </div>

                <div className="md:w-auto">
                  <div className="rating-main pb-1 mb-2">
                    <div className="rating text-[#FDC703]  ">
                      <span className="fa fa-star checked">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span className="fa fa-star checked">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span className="fa fa-star checked">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span className="fa fa-star checked">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span className="fa fa-star checked">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span className="ms-2 text-[#777777] text-[13.6px]">{`${18} Reviews`}</span>
                    </div>
                  </div>
                  <h4 className="text-[18px] text-[black] mb-2 Play-fair hover:text-[#029e9d] duration-100">
                    {Datas.touristPlace}
                  </h4>
                  <h4 className="text-[16px] text-[#029e9d]">
                    <LocationOnOutlinedIcon style={{ fontSize: 20 }} />
                    <span>{Datas.country}</span>
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] lg:flex-row lg:gap-[30px] border-b border-dashed text-[16px] text-[#777777]">
                <div className="rounded-xl w-full bg-[#f1f1f1] p-[16px] mb-4 ">
                  <h3>Check In</h3>
                  <h3 className="text-[#17233e] Play-fair">Thu 21 Feb 2022</h3>
                  <h3 className="text-[13.6px]">15:00 - 22:00</h3>
                </div>
                <div className="rounded-xl w-full bg-[#f1f1f1] p-[16px] mb-4 ">
                  <h3>Check Out</h3>
                  <h3 className="text-[#17233e] Play-fair">Tue 24 Feb 2022</h3>
                  <h3 className="text-[13.6px]">1:00 - 10:00</h3>
                </div>
              </div>
              <div className="text-[16px] border-dashed pb-3 mb-4 border-b ">
                <h3 className="text-[#777777]">Total Length of Stay:</h3>
                <h3>
                  <span className="m-[6px]">8 Days</span>|<span> 7 Nights</span>
                </h3>
                <a href="" className="text-[#777777] text-[13.6px] underline">
                  {" "}
                  travelling on different dates?
                </a>
              </div>
              <div className="text-[16px] ">
                <h3 className="text-[#777777]">You Selected:</h3>
                <div className="flex justify-between Play-fair">
                  <h3 className="">Superior Double Rooms</h3>
                  <p className="font-normal"> 1 Room, 3 Adults</p>
                </div>
                <a href="" className="text-[#777777] text-[13.6px] underline">
                  {" "}
                  travelling on different dates?
                </a>
              </div>
            </div>
            <div className="mb-[32px] p-[15px] shadow-booknow rounded-2xl">
              <h3 className="text-[22px]  mb-4  text-[black] Play-fair">
                Your Price Summary{" "}
              </h3>
              <table className="price-summary">
                <tr>
                  <td className="fir-td">Superior Twin</td>
                  <td className="sec-td"> $500.00</td>
                </tr>
                <tr>
                  <td className="fir-td">Number of Travellers</td>
                  <td className="sec-td">3</td>
                </tr>
                <tr>
                  <td className="fir-td">Tax & fee</td>
                  <td className="sec-td">$50.00</td>
                </tr>
                <tr>
                  <td className="fir-td">Booking Fee</td>
                  <td className="sec-td"> Free</td>
                </tr>
                <tr>
                  <td className="fir-td">Total</td>
                  <td className="sec-td">$550.00</td>
                </tr>
                <tr>
                  <td className="bg-[#212529] font-black text-white">Amount</td>
                  <td className="bg-[#212529] font-black text-white">
                    {" "}
                    $550.00
                  </td>
                </tr>
              </table>
            </div>
            <div className="mb-[32px] p-[15px] shadow-booknow rounded-2xl">
              <h3 className="text-[22px]  mb-4  text-[black] Play-fair">
                Your Payment Schedule{" "}
              </h3>
              <div className="flex justify-between text-[16px] text-[#777777]">
                <h3>Before you stay you'll pay</h3>
                <h3>$40.00</h3>
              </div>
            </div>
            <div className="mb-[32px] p-[15px] shadow-booknow rounded-2xl">
              <h3 className="text-[22px]  mb-4  text-[black] Play-fair">
                Do You Have A Promo Code?{" "}
              </h3>
              <div className=" text-[16px] ">
                <input
                  type="text"
                  className="text-[#777777] apply-input w-full"
                />
                <button className="mt-[16px] py-[14px] px-[24px] rounded-xl button-aply button-apply ">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
