import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import LastMainDeals from "../Mock/PackageData"
import Carowsal from './carousal'
import Offer from './offer'



const GuideCarousal = () => {
  return (
    <div>
      <div>
      <div>
        <div className="flex flex-col justify-center items-center p-[50px]">
          <h1 className="yellow content-head-1 Play-fair">Tour Guides</h1>
          <h1 className="content-head-2 Play-fair">
            <span className="text-[#17233E]">Meet Our </span>
            <span className="text-[#029E9D]">Excellent Guides</span>
          </h1>
          <p className="text-[#777F94] content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        </div>

        <div className='className="w-full flex justify-center p-4  background-travelers"'>
          <div className='lg:max-w-[1200px] grid grid-cols-1 '>
              <GuideCarousal 
              // carouselData={ LastMainDeals }
              />
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default GuideCarousal