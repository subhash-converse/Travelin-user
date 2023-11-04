import React from "react";

// <========== icons ==========>
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <========== hooks ==========>
import { useState, useEffect } from "react";

// <========== images ==========>
import guide from "../../Assets/Images/HomeImage/guide2.jpg";

interface LastMainDeal {
  image: any;
  country: string;
  touristPlace: string;
  reviewsStar: number;
  description: string;
  catogory: string[];
  price: number;
  territory: string;
  days: number;
  guideName?: string;
  position?: string;
}

const ReviewComponent = (props: { carouselData: LastMainDeal[] }) => {
  // <========== hooks ==========>
  const [windowWidth, setWindowWidth] = useState(4);
  let screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth <= 768) {
      setWindowWidth(1);
    } else {
      setWindowWidth(2);
    }
  }, [screenWidth]);
  return (
    <div>
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
        {props.carouselData.map(function(carousal: LastMainDeal) {
          let filter = carousal.catogory.find(function(a) {
            if (a.toLocaleLowerCase().trim() === "landing carowsal") {
              return a;
            }
            else{
              return null
            }
          });
          if (filter) {
            return (
              <SwiperSlide className="flex justify-center ">
                <div className=" carousel-bg lite-input h-[383px] m-10 bg-white  rounded-xl flex flex-col justify-center items-center ">
                  <div className="h-[30%] flex items-center ">
                    <p className=" text-[#777]"><em>
                    <span><FormatQuoteIcon style={{ height: "50", width: "50px" }} className="rotate text-[#777777]"/></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                      </em>
                    </p>
                  </div>
                  <div className="  w-full h-full flex flex-col items-center justify-center text-[#777] p-4 pt-0">
                    <div className="h-[92px] w-[92px]">
                      <img src={guide} alt="" className="  rounded-[50%]" />
                    </div>
                    <h3 className="Play-fair text-[22px]">
                      {carousal.guideName}
                    </h3>
                    <h3 className="text-[16px]">{carousal.position}</h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          }

          else{
            return null
          }
        })}
      </Swiper>
    </div>
  );
};

export default ReviewComponent;
