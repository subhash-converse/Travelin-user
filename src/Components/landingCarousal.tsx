// <========== react ==========>
import React from 'react'

// <========== mock data ==========>
import LastMainDeals from "../Mock/PackageData"

// <========== componets ==========>
import FindHolidayForm from './findHolidayForm';
import Carowsal from './carousal';




const LandingCarousel = () => {
 

  return (
        <div className="">
          <Carowsal carouselData={LastMainDeals} />;
      </div>
  )
        }

export default LandingCarousel