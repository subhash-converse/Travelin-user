// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// ..............Images.................
import mountain from "../../../Assets/Images/HomeImage/mountain.png";

// <========== hooks ==========>
import { useState, useEffect } from "react";

// <========== interface ==========>
import { PackageContent } from "../../../interface/common";

// <========== Data ==========>
import carouselData from "../../../Mock/PackageData";

const PackageSlider = () => {
  // <========== hooks ==========>
  const [windowWidth, setWindowWidth] = useState(4);
  let screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth <= 768) {
      setWindowWidth(1);
    } else if (screenWidth > 768 && screenWidth <= 1024) {
      setWindowWidth(3);
    } else {
      setWindowWidth(4);
    }
  }, [screenWidth]);
  return (
    <div className="relative">
      <div className="h-[500px] overflow-hidden">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={0}
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
          className="mySwiper swiper-pagination-bullets "
        >
          {carouselData.map((carousal: PackageContent) => {
            let filter = carousal.pages_for_show.find((a) => {
              if (a.toLocaleLowerCase().trim() === "landing carowsal") {
                return a;
              } else {
                return null;
              }
            });
            if (filter) {
              return (
                <div key={`LandingCarousel${carousal.id}`}>
                  <SwiperSlide className="flex justify-center w-full">
                    <div className="bg-black">
                      <div className="image-box">
                        <div className="h-full w-full relative ">
                          <img className="image" src={carousal.image} alt="" />
                          <div className="bg-[#000] opacity-[0.6]  w-full h-full absolute top-0  "></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            } else {
              return null;
            }
          })}
        </Swiper>
      </div>

      <div className="absolute top-0 h-full w-full z-10 ">
        <div className=" relative top-[40%] ld:top-[25%] flex justify-center  w-full">
          <div className="text-center text-white ">
            <h1 className="text-[24px] md:text-[58px] Play-fair">
              Tour Single
            </h1>
            <h3 className="flex gap-2 justify-center">
              <span className="text-[#028B8A] text-[16px]">Home</span>
              <span>|</span>
              <span>Tour Single One</span>
            </h3>
          </div>
        </div>
        <div className="">
          <div className="flex absolute bottom-[-1px]">
            <img className=" rotate w-[33.34%]" src={mountain} alt="mountain" />
            <img
              className="relative left-[-1px] rotate w-[33.33%]"
              src={mountain}
              alt="mountain"
            />
            <img
              className="relative left-[-3px] rotate w-[33.48%]"
              src={mountain}
              alt="mountain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSlider;
