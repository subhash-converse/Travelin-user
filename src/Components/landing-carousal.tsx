// <========== react ==========>
import React from 'react'

// <========== mock data ==========>
import LastMainDeals from "../Mock/PackageData"

// <========== componets ==========>
import FindHolidayForm from './find-holiday-form';
import Carowsal from './carowsal';




const LandingCarousel = () => {
 

  return (
        <div className="">
          <Carowsal carouselData={LastMainDeals} />;
          <div>
            <FindHolidayForm/>
          </div>
      </div>
  )
        }

export default LandingCarousel