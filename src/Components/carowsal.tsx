import React from 'react'

// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { url } from "inspector";

// <========== hooks ==========>
import { useRef, useState, useEffect } from "react";

// <========== images ==========>
import carousel1 from "../Assets/Images/corrosal1.jpg";

interface carousalDetail {
    image:any,
    country:string,
    touristPlace:string,
    reviewsStar:number,
    description:string;
    catogory:string[]
    price:number,
    territory:string,
    days:number
}

const Carowsal = (props: { carouselData: carousalDetail[] }) => {
     // <========== hooks ==========>
  const [windowWidth, setWindowWidth] = useState(4);
let b = "landing carowsal"
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

      {props.carouselData.map((carousal: carousalDetail) => {
        let filter = (carousal.catogory).find((a) =>{
            if((a.toLocaleLowerCase()).trim() == b){return a }
        })
        if(filter){
            console.log(filter)
            return (<SwiperSlide className="flex justify-center w-full">
            <div
              className="backround-image"
              style={{ backgroundImage: `url(${carousel1})` }}
            >
              <div className="background-text">
                <h2 className="yellow Play-fair swiper-title1">{carousal.country}</h2>
                <h1 className="white Play-fair swiper-title2">{carousal.touristPlace}</h1>
                <span className="yellow">{carousal.reviewsStar}</span>
                <div className="flex gap-x-2 justify-center">
                  <span className="border-r-[1px] pr-2 yellow">
                    &#36;<span className="swiper-amount">{carousal.price}</span>
                  </span>
                  <span className="white">per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>)
        }
       
      })}

    </Swiper>
    </div>
  )
}

export default Carowsal