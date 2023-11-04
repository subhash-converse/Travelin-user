// <========== icons ==========>
import { faAngleDown, faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

// <========== images ==========>
import logo from "../../Assets/Images/HomeImage/logo.png";
import { Hidden } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [dList, setDList] = useState(false);

  function onHover(e: any) {
    console.log(e);
  }

  function mouseout(e: any) {
    console.log(e);
  }

  return (
    <div>
      <div className="top-head hidden lg:inline-flex justify-center bg-[#029E9D] h-10 w-full text-white">
        <div className="w-[90%]  lg:max-w-[1296px] flex justify-between">
          <div className="flex items-center ">
            <div className="border-r-[1px] border-[#35B0AF] pr-[15px] flex  ">
              <CalendarMonthOutlinedIcon
                className=""
                style={{ width: "19px", height: "16px" }}
              />{" "}
              <span className="">Thursday, Mar 26, 2021</span>
            </div>
            <div className="border-r-[1px] border-[#35B0AF] px-[15px] flex items-center">
              <LocationOnOutlinedIcon
                className=""
                style={{ width: "19px", height: "17px" }}
              />
              <span>Hollywood, America</span>
            </div>
            <div className="pl-[15px] flex items-center">
              <div>
                <WatchLaterOutlinedIcon
                  className=""
                  style={{ width: "19px", height: "17px" }}
                />
              </div>
              <div>Mon-Fri: 10 AM-5 PM</div>
            </div>
          </div>
          <div>
            <div className="flex h-full justify-center items-center">
              <div className=" px-[14px]   border-r-[1px] border-[#35B0AF]">
                <FacebookOutlinedIcon
                  style={{ width: "19px", height: "17px" }}
                />
              </div>
              <div className=" px-[15px] border-r-[1px] border-[#35B0AF]">
                <TwitterIcon style={{ width: "19px", height: "17px" }} />
              </div>
              <div className=" px-[15px]  border-r-[1px] border-[#35B0AF]">
                <InstagramIcon style={{ width: "19px", height: "17px" }} />
              </div>
              <div className=" pl-[14px] ">
                <LinkedInIcon style={{ width: "19px", height: "17px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="h-[100px]  flex justify-center items-center">
        <div className="flex w-[90%] justify-between md:max-w-[696px] lg:max-w-[1296px] ">
          <div className="xl:inline-flex items-center">
            <div className="pt-[1px]">
              <img src={logo} alt="Travelin" className="" />
            </div>
          </div>

          {/* .......................................................................................... */}

          <div className="hidden xl:inline-flex w-auto items-center gap-x-5">
            <span className="nav">HOME</span>
            <span className="nav">ABOUT US</span>

            {/* .......................................... */}
            <div className="dropdown inline-block relative">

              <button className="nav font-semibold py-2  rounded inline-flex items-center">
                <span>DESTINATION <span><FontAwesomeIcon icon={faAngleDown} /></span></span>
              </button>

              <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                <li><a className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">DESTINATION LIST</a></li>
                <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">DESTINATION DETAIL</a></li>
              </ul>
            </div>

            {/* ................................................... */}

            <div className="dropdown inline-block relative">

              <button className="nav font-semibold py-2  rounded inline-flex items-center">
                <span>TOURS <span><FontAwesomeIcon icon={faAngleDown} /></span></span>
              </button>

              <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">TOUR LIST</a>  
                      <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>                      </ul>      
                  </li>
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">TOUR GRID</a>  
                      <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>
                      </ul>      
                  </li>
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">TOUR SINGLE</a>  
                      <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>
                          <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span></span><span></span></span></a></li>
                      </ul>      
                  </li>
              </ul>
            </div>
          
            {/* ................................................................. */}

            
            <div className="dropdown inline-block relative">

                <button className="nav font-semibold py-2  rounded inline-flex items-center">
                  <span>PAGES <span><FontAwesomeIcon icon={faAngleDown} /></span></span>
                </button>

                <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                  <li><a className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Guide</a></li>
                  <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Booking</a></li>
                  <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Confirmation</a></li>
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span>Services</span><span></span></span></a>
                    <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Services List</a></li>
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Services Detail</a></li>
                    </ul> 
                  </li>
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span></span>Gallery<span><span></span></span></a>
                    <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Gallery</a></li>
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Gallery Masonary</a></li>
                    </ul> 
                  </li>
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span>Error</span><span></span></span></a>
                    <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Error 1</a></li>
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Error 2</a></li>
                    </ul> 
                  </li>
                  <li><a className="rounded-b bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Login / Register</a></li>
                  <li><a className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Coming Soon</a></li>
                  <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Testimonials</a></li>
                  <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Faq</a></li>
                  <li><a className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Contact Us</a></li>
                  <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Dashboard</a></li>
                </ul>
            </div>

             {/* ................................................................. */}


           
              <div className="dropdown inline-block relative">

              <button className="nav font-semibold py-2  rounded inline-flex items-center">
                <span>BLOG <span><FontAwesomeIcon icon={faAngleDown} /></span></span>
              </button>

              <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span>Blog Grid</span><span></span></span></a>
                    <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Services List</a></li>
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Services Detail</a></li>
                    </ul> 
                  </li>
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span>Services</span><span></span></span></a>
                    <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Services List</a></li>
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Services Detail</a></li>
                    </ul> 
                  </li>
                  <li className="dropdown"><a className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#"><span><span>Services</span><span></span></span></a>
                    <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Services List</a></li>
                       <li><a className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap" href="#">Services Detail</a></li>
                    </ul> 
                  </li>
              </ul>
              </div>

            {/* ............................................................. */}

            <div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="nav text-[12px]"
              />
            </div>
          </div>
          {/* ................................................................................ */}
          <div className="flex">
            <FontAwesomeIcon
              icon={faBars}
              className="self-center h-[20px] xl:hidden"
            />
            <div className="hidden xl:inline-flex items-center gap-2">
              <span className="text-[#868686] mr-4 text-[15px]">
                <PersonOutlineOutlinedIcon className="mb-[7px] " />
                LOGIN/REGISTER
              </span>

              <button className="button book-now">
                <span className="text">BOOK NOW</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
