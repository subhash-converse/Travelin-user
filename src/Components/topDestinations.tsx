
// <========== mock data ==========>
import carouselData from "../Mock/PackageData";

// <========== Componets ==========>
import Destination from "./Destination";

const TopDestinations = () => {
  return (
    <div>
      <div className="px-4">
        <div className="flex flex-col justify-center items-center p-[50px]">
          <h1 className="yellow content-head-1 Play-fair">Top Destinations</h1>
          <h1 className="content-head-2 Play-fair">
            <span className="text-[#17233E]">Explore </span>
            <span className="text-[#029E9D]">Top Destinations</span>
          </h1>
          <p className="text-[#777F94] content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="flex flex-col items-center ">
          <div
            className="
            grid grid-cols-1 gap-5 w-full
            md:grid-cols-2 
            lg:grid-cols-4 ]
            xl:max-w-[1200px] "
          >
            {carouselData.map((data,index) => {
             
              let filter = data.catogory.find(
                (a) => a.toLowerCase().trim() === "destination");
              if (filter) {
                let filteredData = [];
                filteredData.push(data)
                  return <Destination data={data} index={index} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
