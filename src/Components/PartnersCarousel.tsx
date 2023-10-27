// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <========== hooks ==========>
import { useState, useEffect } from "react";

// <========== images ==========>
import partners1 from "../Assets/Images/partners1.png";
import partners2 from "../Assets/Images/partners2.png";
import partners3 from "../Assets/Images/partners3.png";
import partners4 from "../Assets/Images/partners.4.png";

const PartnersCarousel = () => {
  // <========== hooks ==========>
  const [windowWidth, setWindowWidth] = useState(4);
  let screenWidth = window.innerWidth;

  useEffect(() => {
    if (425 >= screenWidth) {
      setWindowWidth(1);
    } else if (768 >= screenWidth) {
      setWindowWidth(2);
    } else if (1024 >= screenWidth) {
      setWindowWidth(4);
    } else {
      setWindowWidth(5);
    }
  }, [screenWidth]);
  return (
    <div>
      <Swiper
        slidesPerView={windowWidth}
        spaceBetween={100}
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
        <SwiperSlide className="flex justify-center ">
          <img src={partners1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <img src={partners2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <img src={partners3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <img src={partners4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <img src={partners1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <img src={partners2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <img src={partners3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <img src={partners4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PartnersCarousel;
