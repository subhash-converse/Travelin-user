// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <========== hooks ==========>
import { useState, useEffect } from "react";

interface LastMainDeal {
  id:number;
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
  guideImage: string;
  position?: string;
}

const CorouselGuide = (props: { carouselData: LastMainDeal[] }) => {
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
        spaceBetween={25}
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
        className="mySwiper swiper-pagination-bullets"
      >
        {props.carouselData.map((carousal: LastMainDeal) => {
          let filter = carousal.catogory.find((a) => {
            if (a.toLocaleLowerCase().trim() === "guide info") {
              return a;
            } else {
              return null;
            }
          });

          if (filter) {
            return (
              <div key={carousal.id}>
                <SwiperSlide className="flex justify-center ">
                <div className="image-box rounded-xl relative h-[400px] hover:h-[385px] duration-100">
                  <div>
                    <img src={carousal.guideImage} alt="" className="image" />
                  </div>

                  <div className=" bg-[#029e9d] w-full z-10 rounded-b-lg flex flex-col items-center justify-center text-white p-4 absolute bottom-0 left-0 right-0">
                    <h3 className="Play-fair text-[22px]">
                      {carousal.guideName}
                    </h3>
                    <h3 className="text-[16px]">{carousal.position}</h3>
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

export default CorouselGuide;
