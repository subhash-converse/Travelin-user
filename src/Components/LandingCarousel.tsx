// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <========== hooks ==========>
import { useState, useEffect } from "react";

// <========== images ==========>
import carousel1 from "../Assets/Images/corrosal1.jpg";

// <========== images ==========>
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


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

const LandingCarousel = (props: { carouselData: LastMainDeal[] }) => {
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
    <div>
      <Swiper
        slidesPerView={windowWidth}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper-pagination-bullets "
      >
        {props.carouselData.map((carousal: LastMainDeal) => {
          let filter = carousal.catogory.find((a) => {
            if (a.toLocaleLowerCase().trim() === "landing carowsal") {
              return a;
            }
            else{
              return null
            }
          });
          if (filter) {
            return (
              <SwiperSlide className="flex justify-center w-full">
                <div
                  className="backround-image carousel-bg ]"
                  style={{ backgroundImage: `url(${carousel1})` }}
                >
                  <div className="bg-[#000] h-full w-full opacity-50 absolute">
                  </div>
                  <div className="background-text z-[1] ">
                    <h2 className="yellow Play-fair swiper-title1">
                      {carousal.country}
                    </h2>
                    <h1 className="white Play-fair swiper-title2">
                      {carousal.touristPlace}
                    </h1>
                    <span className="yellow">{carousal.reviewsStar}</span>
                    <div className="flex gap-x-2 justify-center">
                      <span className="border-r-[1px] pr-2 yellow">
                        &#36;
                        <span className="swiper-amount font-extrabold">{carousal.price}</span>
                      </span>
                      <span className="white text-[16px] self-end">per person</span>
                    </div>
                    <h3  className="white text-[16px]">
                      <span><CalendarMonthOutlinedIcon className=""/></span>
                      <span className="font-black">{carousal.days}Days Tour</span>
                      </h3>
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

export default LandingCarousel;
