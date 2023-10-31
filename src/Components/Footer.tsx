// <========== icons ==========>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <========== hooks ==========>
import { useState, useEffect } from "react";

// <========== images ==========>
import blueMountain from "../Assets/Images/mountain.png";
import whiteLogo from "../Assets/Images/logo-white.png";
import peoples from "../Assets/Images/peoples.png";
import footer1 from "../Assets/Images/footer1.jpg";
import footer2 from "../Assets/Images/footer2.jpg";
import footer3 from "../Assets/Images/footer3.jpg";
import footer4 from "../Assets/Images/footer4.jpg";
import footer5 from "../Assets/Images/footer5.jpg";
import footer6 from "../Assets/Images/footer6.jpg";
import footer7 from "../Assets/Images/footer7.jpg";
import footer8 from "../Assets/Images/footer8.jpg";
import footer9 from "../Assets/Images/footer9.jpg";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(4);
  let screenWidth = window.innerWidth;

  useEffect(() => {
    if (425 >= screenWidth) {
      setWindowWidth(2);
    } else if (768 >= screenWidth) {
      setWindowWidth(3);
    } else if (1024 >= screenWidth) {
      setWindowWidth(4);
    } else {
      setWindowWidth(8);
    }
  }, [screenWidth]);

  return (
    <div>
      <div className="flex">
        <img
          src={blueMountain}
          className="bg-[#17233E] w-[33.33%] relative top-1 "
          alt=""
        />
        <img
          src={blueMountain}
          className="bg-[#17233E] w-[33.33%] relative top-1"
          alt=""
        />
        <img
          src={blueMountain}
          className="bg-[#17233E] w-[33.33%] relative top-1"
          alt=""
        />
      </div>

      <div className=" w-full flex flex-col items-center p-4 bg-[#17233E]">
        <div className="w-full lg:max-w-[1290px] grid grid-cols-1 ">
          {/* carousel */}

          <div className="bg-[#17233E] h-[131px] md:h-[195px] lg:h-[97px] xl:h-[135px] ">
            <Swiper
              slidesPerView={windowWidth}
              spaceBetween={30}
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
              <SwiperSlide className="flex justify-center img-radius  ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer1}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer1}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer1}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer1}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer2}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer3}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer4}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer5}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer6}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer7}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer8}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer9}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer1}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer2}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <img
                    className="image img-radius h-[100px] bg-[#17233E]"
                    src={footer3}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center relative z-10 top-[-70%] md:top-[-60%] lg:top-[-70%] xl:top-[-60%] outline-[3px] outline-black   m-[2px]">
              <button className=" bg-white text-Play-fair rounded-xl gap-1 flex items-center px-[15px] py-[10px]">
                <div>
                  <InstagramIcon />
                </div>
                <div>Follow On Instagram</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="background-travelers bg-[#17233E] grid grid-cols-1 p-4 justify-items-center"
        style={{ backgroundImage: `url(${peoples})` }}
      >
        <div className="lg:max-w-[1290px] ">
          <div className=" grid-width grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 text-white text-[16px] lg:gap-0">
            {/* col 1 */}
            <div className="flex flex-col lg:px-2">
              <img src={whiteLogo} alt="logo" className="h-[46px] w-[216px]" />
              <p className="my-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                suspendisse leo neque iaculis molestie sagittis maecenas aenean
                eget molestie sagittis.
              </p>
              <div className="flex flex-col gap-4 mb-[32px]">
                <h4>
                  <span className="font-semibold">PO Box :</span>{" "}
                  +47-252-254-2542
                </h4>
                <h4>
                  <span className="font-semibold">Location :</span> Collins
                  Street, sydney, Australia
                </h4>
                <h4>
                  <span className="font-semibold">Email :</span>{" "}
                  info@Travelin.com
                </h4>
                <h4>
                  <span className="font-semibold">Website :</span>{" "}
                  www.Travelin.com
                </h4>
              </div>
            </div>

            {/* col 2 */}
            <div className="mb-[32px] flex flex-col lg:px-2">
              <h2 className="footer-heading underline">Quick Link</h2>
              <div className="flex flex-col gap-4 md:justify-between h-full ">
                <h3>About Us</h3>
                <h3>Delivery Information</h3>
                <h3>Privacy Policy</h3>
                <h3>Terms & Conditions</h3>
                <h3>Customer Service</h3>
                <h3>Return Policy</h3>
              </div>
            </div>

            {/* col 3 */}
            <div className="mb-[32px] flex flex-col lg:px-2">
              <h2 className="footer-heading underline">Categories</h2>
              <div className="flex flex-col gap-4 md:justify-between h-full ">
                <h3>Travel</h3>
                <h3>Technology</h3>
                <h3>Lifestyle</h3>
                <h3>Destinations</h3>
                <h3>Entertainment</h3>
                <h3>Business</h3>
              </div>
            </div>

            {/* col 4 */}
            <div className="mb-[32px] flex flex-col  lg:px-2">
              <h2 className="footer-heading underline">Newsletter</h2>
              <div className="grid gap-4">
                <p>
                  Jin our community of over 200,000 global readers who receives
                  emails filled with news, promotions, and other good stuff.
                </p>
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-1">
                  <div className="bg-white pl-5 py-3 lg:py-[11px] rounded-lg flex items-center">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="w-full outline-none text-[#000] rounded-lg text-[15px] "
                    />
                  </div>
                  <button className="bg-[#777777] rounded-lg  border-[#3E4253] border-[3px] p-[14px] lg:p-[12px] lg:w-[37%]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-width lg:grid grid-cols-4 px-2 justify-between items-center text-white">
            <div className="flex justify-start">
              <h3 className="text-[16px]">We Support : </h3>
              <div className="flex gap-4 items-center">
                <i className="fa-brands fa-cc-paypal"></i>
                <FontAwesomeIcon icon={faLocationDot} />
                <FontAwesomeIcon icon={faLocationDot} />
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
            </div>
            <div></div>
            <div></div>

            <div className="mt-2 flex gap-4  lg:gap-1  lg:mt-0">
              <div className="bg-white px-5 py-3 lg:py-[11px] rounded-lg flex items-center w-[70%]">
                <select
                  name=""
                  id=""
                  className=" custom-dropdown w-full bg-white text-black outline-none"
                >
                  <option value="English" className="">
                    English
                  </option>
                  <option value="Chinese">Chinese</option>
                  <option value="Russian">Russian</option>
                </select>
              </div>

              <select className="bg-white w-[30%] text-black rounded-lg  border-[#3E4253] border-[3px] p-[14px] lg:p-[12px] lg:w-[37%]">
                <option value="$ USD" className="">
                  $ USD
                </option>
                <option value="$ AUDI">$ AUDI</option>
                <option value="$ YEN">$ YEN</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col py-5 md:px-6 rounded-xl mt-6 bg-[#fbfbfb12] md:flex-row justify-between  text-white">
            <div className="flex justify-center items-center">
              {" "}
              <h3>2022 Travelin. All rights reserved.</h3>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%] ">
                <FacebookOutlinedIcon />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                {" "}
                <TwitterIcon />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                <InstagramIcon />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
