// <========== hooks ==========>
import { useState } from 'react';

// <========== mock data ==========>
import carouselData from "../Mock/PackageData"
import Card from './card';
import LastMinuteDeals from './lastMinuteDeals';

const BestTourPackages = () => {
  const [btnOff,setBtnOn] = useState(false)

  const showPackages = () =>{
    setBtnOn(!btnOff)
  // debugger
  //     // const collapsePackage = carouselData;
  //    const collapsePackage = carouselData.slice(0,3)
  }

  return (
    <div>
              <div>
        <div className="flex flex-col justify-center items-center p-[50px]">
          <h1 className="yellow content-head-1 Play-fair">Top Pick</h1>
          <h1 className="content-head-2 Play-fair">
            <span className="text-[#17233E]">Best </span>
            <span className="text-[#029E9D]">Tour Packages</span>
          </h1>
          <p className="text-[#777F94] content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

   
      <div className="w-full flex justify-center p-4">
      <div className="lg:max-w-[1200px] grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* {carouselData.map((data) => (
        <Card data = {data}/>
         )) } */}
         {carouselData.map((data) => {
              let filter = (data.catogory).find((a)=>((a.toLowerCase()).trim() == "best tour package"))
                if (filter) {
                  return <Card data={data} />;
                } else {
                  return null;
                }
            }
              )}
         <div className='sm:col-span-2 lg:col-span-3 justify-self-center'>
         <button className='tour-pic-btn' onClick={showPackages}>{btnOff ? "close" : "view All Packages"}</button>
         </div>
      </div>
    </div>
      </div>
      
    </div>
    
  )
}

export default BestTourPackages