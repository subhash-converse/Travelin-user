import React from "react";
// <========== components ==========>
import Packages from "../../../Mock/PackageData";

// <========== interface ==========>
import { PackageContent } from "../../../interface/common";

// <========== components ==========>
import Accordion from "./Accordion";
import AverageReviews from "./AverageReviews";
import ReviewChat from "./ReviewChat";
import ExploreYourLife from "../../HomePage/ExploreYourLife";
import Partners from "../../HomePage/Partners";

// <========== icons ==========>
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import SignpostOutlinedIcon from "@mui/icons-material/SignpostOutlined";

const PackageDetailContent = () => {
  let currentUrl = window.location.href;
  let paramsVal = Number(currentUrl.split("/").pop());

 let arr = Packages.filter((data)=>{
    return data.id === paramsVal
  })

  return (
    <div className="w-full ">
      {arr.map((data: PackageContent) => (
        <div className="max-w-[1290px] px-[15px] lg:flex mx-auto pt-[48px]" id="package">
          <div className="w-full lg:w-[65%] px-[15px] ">
            <div className="mb-4 pb-4">
              <h2 className="text-[28px] mb-2 lg:text-[46px]  Play-fair ">
                Adriatic Adventure–Zagreb To Athens
              </h2>
              <div className="text-[16px] ">
                <div className="text-[#777777] md:flex">
                  <div>
                    <LocationOnOutlinedIcon className="" />
                    <span className="text-[16px] md:mr-2">
                      Greater London, United Kingdom
                    </span>
                  </div>
                  <div className="rating-main pb-1 md:mr-2">
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
                    </div>
                  </div>
                  <div>
                    <h2>(1.11.1)</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[16px] text-[#777777] mb-[23px]">
              <img
                className="rounded-xl max-h-[524px] w-full"
                src={data.image}
                alt="packageimage"
              />
              <h3 className="text-[22px] mb-4 mt-6 text-[black] Play-fair">
                Description
              </h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs.
              </p>
              <br />
              <p>
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of Cicero's De
                Finibus Bonorum et Malorum for use in a type specimen book.
              </p>
            </div>
            <table className="package-table text-[#777777] mb-[30px]">
              <tr>
                <td>
                  <AccessTimeFilledIcon style={{ fontSize: 18 }} />
                  <span>{data.days}</span>
                </td>
                <td>
                  <GroupsIcon style={{ fontSize: 18 }} />
                  <span> Max People : 26</span>
                </td>
                <td>
                  <CalendarMonthOutlinedIcon style={{ fontSize: 18 }} />
                  <span> Jan 18 - Dec 21</span>
                </td>
              </tr>
              <tr>
                <td>
                  <PersonIcon style={{ fontSize: 18 }} />
                  <span> Min Age : 10+</span>
                </td>
                <td>
                  <SignpostOutlinedIcon style={{ fontSize: 18 }} />
                  <span> Pickup : Airport</span>
                </td>
                <td>
                  <DescriptionIcon style={{ fontSize: 18 }} />
                  <span> Langauge - English, Thai</span>
                </td>
              </tr>
            </table>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[33px] gap-y-[18px]">
              <div className="feautures-card">
                <h2 className="Play-fair">Departure & Return Location</h2>
                <div>
                  <h3>John F.K. International Airport(Google Map)</h3>
                </div>
              </div>
              <div className="feautures-card">
                <h2 className="Play-fair">Bedroom</h2>
                <div>
                  <h3>4 Bedrooms</h3>
                </div>
              </div>
              <div className="feautures-card">
                <h2 className="Play-fair">Departure Time</h2>
                <div>
                  <h3>3 Hours Before Flight Time</h3>
                </div>
              </div>
              <div className="feautures-card">
                <h2 className="Play-fair">Departure Time</h2>
                <div>
                  <h3>3 Hours Before Flight Time</h3>
                </div>
              </div>
              <div className="feautures-card">
                <h2 className="Play-fair">Price Includes</h2>
                <ul className="tick">
                  <li> Air Fares</li>
                  <li> 3 Nights Hotel Accomodation</li>
                  <li> Tour Guide</li>
                  <li> Entrance Fees</li>
                </ul>
              </div>
              <div className="feautures-card">
                <h2 className="Play-fair">Departure & Return Location</h2>
                <ul className="into-mark">
                  <li> Guide Service Fee</li>
                  <li> Driver Service Fee</li>
                  <li> Any Private Expenses</li>
                  <li> Room Service Fees</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-[22px] mb-4 mt-6 text-[black] Play-fair">
                What To Expect
              </h3>
              <p className=" text-[#777777]">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs.
              </p>
              <br />
              <p className=" text-[#777777]">
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of Cicero's De
                Finibus Bonorum et Malorum for use in a type specimen book.
              </p>
              {/* accordian */}
              <div id="accordian">
                <Accordion accordian={data.days_and_plans} />
              </div>
            </div>
            {/* map */}
            <h1
              id="map"
              className="text-[22px] mb-4 mt-6 text-[black] Play-fair"
            >
              Map
            </h1>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.316119983607!2d77.40001787588767!3d11.457093288736116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d3bfdc1d069%3A0xa41fe60535616a66!2sConverse%20Data%20Solutions!5e0!3m2!1sta!2sin!4v1700231215327!5m2!1sta!2sin"
                width="789"
                height="450"
                loading="lazy"
                title="map"
              ></iframe>
            </div>
            {/* reviews */}
            <h1
              id="reviews"
              className="text-[22px] mb-4 mt-6 text-[black] Play-fair"
            >
              Average Reviews
            </h1>
            <div>
              <AverageReviews averageReview={data.review_summary} />
            </div>
            {/*  review chats*/}
            <h1
              id="chat"
              className="text-[22px] pb-4 mb-4 mt-6  border-b border-dashed border-[] text-[black] Play-fair"
            >
              Showing 16 Verified Guest Comments{" "}
            </h1>
            <div className="grid grid-cols-1 gap-4">
              <ReviewChat chat={data.reviews}/>
            </div>
            {/* form */}
            <h3
              id="addreview"
              className="text-[22px] mb-4 mt-6 text-[black] Play-fair"
            >
              Write A Review
            </h3>
            <form action="">
              <div className="md:flex gap-[30px]">
                <input
                  type="text"
                  className="package-input w-full px-[12px] text-[15px] py-[14px] mb-[18px] text-[#777777] border rounded-lg"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="package-input w-full  px-[12px] text-[15px] py-[14px] mb-[18px] text-[#777777] border rounded-lg"
                  placeholder="Email"
                />
              </div>
              <textarea
                name=""
                id=""
                placeholder="Comment"
                className="package-input w-full text-[#777777] text-[15px] min-h-[128px] px-[12px] py-[20px] mb-5 border rounded-lg"
              ></textarea>
              <button className="button bg-[#029e9d] text-white px-[24px] text-[15px] py-[14px] rounded-lg">
                Submit Review
              </button>
            </form>
          </div>
          <div className="w-full lg:w-[35%]">
            <div className="pl-[24px] flex flex-col sticky top-[150px]">
              <a href="#package" className="package-highlight ">
                Highlight
              </a>
              <a href="#accordian" className="package-index">
                Iternary
              </a>
              <a href="#reviews" className="package-index">
                Reviews
              </a>
              <a href="#chat" className="package-index">
                Comments
              </a>
              <a href="#addreview" className="package-index">
                Add Reviews
              </a>
            </div>
          </div>
        </div>
      ))} 
      <div>
        <ExploreYourLife />
      </div>
      <div>
        <div className=" max-w-[1290px] mx-auto">
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default PackageDetailContent;
