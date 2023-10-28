import React from "react";

// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <========== hooks ==========>
import { useState, useEffect } from "react";

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
                <div className=" carousel-bg main-input h-[332px] m-10 bg-white  rounded-xl flex flex-col justify-center items-center ">
                  <div className="h-[50%] flex items-center ">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                  <div className="  w-full h-[50%]  flex flex-col items-center justify-center text-[#777] p-4">
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
