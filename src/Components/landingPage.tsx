import React, { useEffect } from "react";
import logo from "../Assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faCalendarDays,
  faClock,
  faLocationDot,
  faFlag,
  faCompass,
  faSignsPost

} from "@fortawesome/free-solid-svg-icons";

// images
import carousel1 from "../Assets/Images/corrosal1.jpg";
import carousel2 from "../Assets/Images/corosal2.jpg";
import carousel3 from "../Assets/Images/corrosal3.jpg"; 
import carousel4 from "../Assets/Images/corrosal4.jpg";
import carousel5 from "../Assets/Images/corrosal4.jpg";
import mountain from "../Assets/Images/mountain.png";
import paint from "../Assets/Images/shape4.png";
import destination1 from "../Assets/Images/destination1.jpg";
import destination1 from "../Assets/Images/destination1.jpg";
import destination1 from "../Assets/Images/destination1.jpg";
import destination1 from "../Assets/Images/destination1.jpg";
import destination1 from "../Assets/Images/destination1.jpg";
import destination1 from "../Assets/Images/destination1.jpg";


// css
import "../App.css";

// hooks
import { useRef, useState } from "react";
// Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { url } from "inspector";

const LandingPage = () => {
  const [windowWidth,setWindowWidth] = useState(4)

  let screenWidth = window.innerWidth;

  useEffect(() => {
    if(screenWidth <= 768 ){
      setWindowWidth(1);
    }
    else if(screenWidth > 768 && screenWidth <= 1024){
      setWindowWidth(3);
    }
    else{
      setWindowWidth(4);
    }
  },[screenWidth])

//  card hover changes

const card = (x:any)=>{
  let id = (x.target.id)
  if(id){
    // document.getElementById(`${id}`)?.style.backgroundColor = #77777
  }
  console.log()
}

const cardOut = (x:any)=>{
  console.log(x)
}
  return (
    <div className="">
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
      <div className="">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={1}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex justify-center w-full">
            <div
              className="backround-image"
              style={{ backgroundImage: `url(${carousel1})` }}
            >
              <div className="background-text">
                <h2 className="yellow Play-fair swiper-title1">Norway</h2>
                <h1 className="white Play-fair swiper-title2">Capital Tour</h1>
                <span className="yellow">stars</span>
                <div className="flex gap-x-2 justify-center">
                  <span className="border-r-[1px] pr-2 yellow">
                    &#36;<span className="swiper-amount">310.00</span>
                  </span>
                  <span className="white              ">per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center w-full">
            <div
              className="backround-image"
              style={{ backgroundImage: `url(${carousel2})` }}
            >
              <div className="background-text">
                <h2 className="yellow Play-fair swiper-title1">Norway</h2>
                <h1 className="white Play-fair swiper-title2">Capital Tour</h1>
                <span className="yellow">stars</span>
                <div className="flex gap-x-2 justify-center">
                  <span className="border-r-[1px] pr-2 yellow">
                    &#36;<span className="swiper-amount">310.00</span>
                  </span>
                  <span className="white">per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center w-full">
            <div
              className="backround-image"
              style={{ backgroundImage: `url(${carousel3})` }}
            >
              <div className="background-text">
                <h2 className="yellow Play-fair swiper-title1">Norway</h2>
                <h1 className="white Play-fair swiper-title2">Capital Tour</h1>
                <span className="yellow">stars</span>
                <div className="flex gap-x-2 justify-center">
                  <span className="border-r-[1px] pr-2 yellow">
                    &#36;<span className="swiper-amount">310.00</span>
                  </span>
                  <span className="white">per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center w-full">
            <div
              className="backround-image"
              style={{ backgroundImage: `url(${carousel4})` }}
            >
              <div className="background-text">
                <h2 className="yellow Play-fair swiper-title1">Norway</h2>
                <h1 className="white Play-fair swiper-title2">Capital Tour</h1>
                <span className="yellow">stars</span>
                <div className="flex gap-x-2 justify-center">
                  <span className="border-r-[1px] pr-2 yellow">
                    &#36;<span className="swiper-amount">310.00</span>
                  </span>
                  <span className="white">per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center w-full">
            <div
              className="backround-image"
              style={{ backgroundImage: `url(${carousel3})` }}
            >
              <div className="background-text">
                <h2 className="yellow Play-fair swiper-title1">Norway</h2>
                <h1 className="white Play-fair swiper-title2">Capital Tour</h1>
                <span className="yellow">stars</span>
                <div className="flex gap-x-2 justify-center">
                  <span className="border-r-[1px] pr-2 yellow">
                    &#36;<span className="swiper-amount">310.00</span>
                  </span>
                  <span className="white">per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div style={{backgroundImage: `url(${mountain})`}} className="mountain-back lg:min-h-[172px] flex justify-center px-4 mt-8 lg:mt-0 z-10 lg:pt-[100px]">
        <div className=" main-input h-full w-[1200px] flex flex-col rounded-md bg-white lg:flex-row ">
          <div className="w-full py-[30px] flex bg-[#029E9D] text-white justify-center items-center gap-2 rounded-t-md lg:rounded-none lg:rounded-l-md lg:w-[20%] ">
            <div className="lg:w-[30%] lg:flex justify-end  "><FontAwesomeIcon className="h-[39px]  justify-around" icon={faLocationDot} /></div>
            <span className="text-[22px] flex-wrap lg:w-[70%]">Find Your Holidays</span>
          </div>
          <form className="w-full  flex flex-col gap-3 justify-evenly items-center lg:flex-row lg:px-3  " action="">
            <div className="input-outerDiv mt-5 lg:mt-0"> 
            <select name="" id="" className="input">
              <option value="" selected hidden >Destination</option>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
            </select>
            </div>
            
            <div className="input-outerDiv">
            <input type="date" className="input" />
            </div>
            
            <div className="input-outerDiv">
            <select name="" id="" className="input">
              <option value="" selected hidden >Travel Type</option>
              <option value="City Tour">City Tour</option>
              <option value="Family Tour">Family Tour</option>
            </select>
            </div>
            
            <div className="input-outerDiv">
            <select className="input" name="" id="">
              <option value="" selected hidden >Travel Duration</option>
              <option value="2 days">2 days</option>
              <option value="4 days">4 days</option>
              <option value="6 days">6 days</option>
              <option value="india">10 days</option>
            </select>
            </div>
            
            <button className="bg-[#029E9D] text-white rounded-md  h-[49px] w-[80%] mb-4 lg:mb-0 flex gap-2 justify-center items-center">
              <span><FontAwesomeIcon
                icon={faMagnifyingGlass}
                className=" text-[12px]"
              /></span>
              <span>Search Now</span>
            </button>
          </form>
        </div>
      </div>

      <div className="paint px-4 grid grid-flow-row" style={{backgroundImage: `url(${paint})`}}>
          <div className="flex flex-col justify-center items-center p-[50px]">
            <h1 className="yellow content-head-1 Play-fair">Core Futures</h1>
            <h1 className="content-head-2 Play-fair"><span className="text-[#17233E]">Find </span><span className="text-[#029E9D]">Travel Perfection</span></h1>
            <p className="text-[#777F94] content-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="w-full flex justify-center">
          <div className="max-w-[1200px] grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            <div className="card  " id="box1"  onMouseOver={card} onMouseOut={cardOut}>
            <FontAwesomeIcon icon={faFlag} className="card-icon" />
            <h3 className="card-head Play-fair">Tell Us What You Want To Do</h3>
            <p className="card-para">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <p className="card-review">100+ Reviews</p>
            </div>
            <div  className="card">
            <FontAwesomeIcon className="card-icon"  icon={faLocationDot} />
            <h3 className="card-head Play-fair">Tell Us What You Want To Do</h3>
            <p className="card-para">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <p className="card-review">100+ Reviews</p>
            </div>
            <div  className="card">
            <FontAwesomeIcon className="card-icon"  icon={faSignsPost} />
            <h3 className="card-head Play-fair">Tell Us What You Want To Do</h3>
            <p className="card-para">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <p className="card-review">100+ Reviews</p>
            </div>
            <div  className="card">
            <FontAwesomeIcon className="card-icon"  icon={faCompass} />
            <h3 className="card-head Play-fair">Tell Us What You Want To Do</h3>
            <p className="card-para">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <p className="card-review">100+ Reviews</p>
            </div>
          </div>
          </div>
      </div>

      <div>
      <div className="flex flex-col justify-center items-center p-[50px]">
            <h1 className="yellow content-head-1 Play-fair">Top Destinations</h1>
            <h1 className="content-head-2 Play-fair"><span className="text-[#17233E]">Explore </span><span className="text-[#029E9D]">Top Destinations</span></h1>
            <p className="text-[#777F94] content-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-[1200px]">
              <div>
                <img src="" alt="destination 1" />
              </div>
             

            </div>
          </div>
      </div>
     
    </div>
  );
};

export default LandingPage;
