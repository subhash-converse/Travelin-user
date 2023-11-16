// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import destination1 from "../../Assets/Images/HomeImage/TopPick1.jpg";

// <========== interface ==========>
import { PackageContent } from "../../interface/common";

const CardCarousel = (props: { carouselData: PackageContent[] }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper-pagination-bullets"
      >
        {props.carouselData.map((carousal: PackageContent) => {
          let filter = carousal.pages_for_show.find((a) => {
            if (a.toLocaleLowerCase().trim() === "related destination") {
              return a;
            } else {
              return null;
            }
          });

          if (filter) {
            return (
              <SwiperSlide className="flex justify-center  ">
                <div className="lg:col-span-2 h-[400px] image-box img-radius relative">
                  <div className="h-full">
                    <img src={destination1} alt="" className="image" />
                  </div>

                  <div className=" w-full flex justify-between p-[24px] absolute bottom-0 left-0 right-0">
                    <div className="Play-fair">
                      <h3 className="yellow text-left">{carousal.country}</h3>
                      <h3 className="white text-[21px] text-left md:text-[26px]">
                        {carousal.territory}
                      </h3>
                    </div>
                    <div className="flex items-end">
                      <button className="destination-btn text-[16px]">{`${carousal.days} days`}</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          } else {
            return null;
          }
        })}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
