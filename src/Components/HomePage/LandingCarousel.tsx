// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <========== hooks ==========>
import { useState, useEffect } from "react";

// <========== images ==========>
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface LastMainDeal {
  id: number;
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
        {props.carouselData.map((carousal: LastMainDeal) => {
          let filter = carousal.catogory.find((a) => {
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
                <div  className="bg-black">
                  <div className="image-box">
                    <div className="h-full w-full relative ">
                      <img className="image" src={carousal.image} alt="" />
                      <div className="bg-[#000] opacity-[0.6]  w-full h-full absolute top-0  "></div>
                    </div>

                    <div className="background-text z-[3] w-full h-full absolute top-[40%] ">
                      <h2 className="yellow Play-fair swiper-title1">
                        {carousal.country}
                      </h2>
                      <h1 className="white Play-fair swiper-title2">
                        {carousal.touristPlace}
                      </h1>

                      <div className="rating-main pb-1">
                        <div className="rating text-[#FDC703]  ">
                          <span className=" fa-star checked">
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span className=" fa-star checked">
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span className=" fa-star checked">
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span className=" fa-star checked">
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span className=" fa-star checked">
                            <FontAwesomeIcon icon={faStar} />
                          </span>
                          <span className="ms-2 white">(18)</span>
                        </div>
                      </div>

                      <span className="yellow">{carousal.reviewsStar}</span>
                      <div className="flex gap-x-2 justify-center">
                        <span className="border-r-[1px] pr-2 yellow">
                          &#36;
                          <span className="swiper-amount font-extrabold">
                            {carousal.price}
                          </span>
                        </span>
                        <span className="white text-[16px] self-end">
                          per person
                        </span>
                      </div>
                      <h3 className="white text-[16px]">
                        <span>
                          <CalendarMonthOutlinedIcon className="" />
                        </span>
                        <span className="font-black">
                          {carousal.days}Days Tour
                        </span>
                      </h3>
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
  );
};

export default LandingCarousel;
