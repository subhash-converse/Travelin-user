// <========== icons ==========>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
    if (425 >= screenWidth ){
      setWindowWidth(2)
    }
    else if (768 >= screenWidth) {
      setWindowWidth(3)
    }   
    else if (768 >= screenWidth) {
      setWindowWidth(5)

    } else {
      setWindowWidth(6)
    }
  }, [screenWidth]);

  return (
    <div>
      <div className="">
        <img
          src={blueMountain}
          className="bg-[#17233E] w-full relative top-1"
          alt=""
        />
      </div>

      <div className="w-full flex flex-col items-center p-4 bg-[#17233E]">
        <div className="w-full lg:max-w-[1200px] grid grid-cols-1 ">
          {/* carousel */}

          <div className="bg-[#17233E]">
            <Swiper
              slidesPerView={windowWidth}
              spaceBetween={70}
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
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer4} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer5} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer6} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer7} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer8} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer9} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer7} alt="" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <img className="img-radius bg-[#17233E]" src={footer8} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div
        className="background-travelers bg-[#17233E] grid grid-cols-1 justify-items-center"
        style={{ backgroundImage: `url(${peoples})` }}
      >
        <div className="lg:max-w-[1200px] p-4">
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
              <h2 className="footer-heading">Quick Link</h2>
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
              <h2 className="footer-heading">Categories</h2>
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
              <h2 className="footer-heading">Newsletter</h2>
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
          <div className=" lg:flex justify-between items-center text-white">
            <div className="flex justify-center">
              <h3 className="text-[16px]">We Support : </h3>
              <div className="flex gap-4 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <FontAwesomeIcon icon={faLocationDot} />
                <FontAwesomeIcon icon={faLocationDot} />
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
            </div>

            <div className="mt-2 flex gap-4  lg:gap-1 lg:mt-0">
              <div className="bg-white pl-5 py-3 lg:py-[11px] rounded-lg flex items-center w-[70%]">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full outline-none text-[#000] rounded-lg text-[15px] "
                />
              </div>
              <button className="bg-[#777777] w-[30%] rounded-lg  border-[#3E4253] border-[3px] p-[14px] lg:p-[12px] lg:w-[37%]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col py-5 md:px-6 rounded-xl mt-6 bg-[#fbfbfb12] md:flex-row justify-between  text-white">
            <div className="flex justify-center items-center">
              {" "}
              <h3>2022 Travelin. All rights reserved.</h3>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%] ">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                {" "}
                <FontAwesomeIcon icon={faImage} />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                <FontAwesomeIcon icon={faImage} />
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
