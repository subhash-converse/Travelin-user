// <========== react ==========>
import React from 'react'

// <========== icons ==========>

import { faBars, faCalendarDays, faClock, faLocationDot, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// <========== images ==========>
import logo from "../Assets/Images/logo.png";

// <========== componet ==========>
import Carousel from './landing-carousal';
import LandingCarousel from './landing-carousal';

const Header = () => {
  return (
    <div>
        <div className="top-head hidden lg:inline-flex justify-center bg-[#029E9D] h-10 w-full text-white">
        <div className="w-[90%]  lg:max-w-[1296px] flex justify-between">
          <div className="flex items-center gap-2">
            <div className="border-r-[1px] pr-[8px]">
              <FontAwesomeIcon icon={faCalendarDays} />{" "}
              <span>Sunday, Mar 26, 2021</span>
            </div>
            <div className="border-r-[1px] pr-[8px]">
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <span>Hollywood, America</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} /> Mon-Fri:10 AM-5 PM
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <header className="h-[94px]  flex justify-center items-center">
        <div className="flex w-[90%] justify-between md:max-w-[696px] lg:max-w-[1296px] ">
          <div>
            <img src={logo} alt="Travelin" className="" />
          </div>

          <div className="hidden xl:inline-flex w-auto items-center gap-x-5">
            <span className="nav">HOME</span>
            <span className="nav">ABOUT US</span>
            <select
              name="destination"
              id="destination"
              className="w-[140px] nav    "
            >
              <option value="" selected hidden>
                DESTINATION
              </option>
              <option value="">Destination List</option>
              <option value="">Destination Details</option>
            </select>
            <select name="tours" id="tours" className="dropdown-land nav">
              <option value="" selected hidden>
                TOURS
              </option>
              <option value="">Tour List</option>
              <option value="">Tour Grid</option>
              <option value="">Tour Single</option>
            </select>
            <select name="pages" id="pages" className="dropdown-land nav">
              <option value="" selected hidden>
                BLOG
              </option>
              <option value="">Our Guide</option>
              <option value="">Booking</option>
              <option value="">Confirmation</option>
              <option value="">Services</option>
              <option value="">Gallery</option>
              <option value="">Error</option>
            </select>
            <div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="nav text-[12px]"
              />
            </div>
          </div>

          <div className="flex">
            <FontAwesomeIcon
              icon={faBars}
              className="self-center h-[20px] xl:hidden"
            />
            <div className="hidden xl:inline-flex items-center gap-2">
              <span className="text-[#029E9D] ">
                <FontAwesomeIcon icon={faUser} className="text-[15px] mr-1" />
                LOGIN/REGISTER
              </span>

              <button className="book-now">BOOK NOW</button>
            </div>
          </div>
        </div>
      </header>

      <div>
        <LandingCarousel/>
      </div>
    </div>
  )
}

export default Header