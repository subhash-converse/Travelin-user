
// <========== mock data ==========>
import carouselData from "../../Mock/PackageData";

// <========== Componets ==========>
import Destination from "./Destination";

const TopDestinations = () => {

  interface data {
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
  };

  let filteredData:data[] = [];
  {carouselData.map((data) => {
    let filter = data.catogory.find(
      (a) => a.toLowerCase().trim() === "destination");
    if (filter) {
      return filteredData.push(data)        
    } else {
      return null;
    }
  })}

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

        <div className="flex flex-col items-center h-full ">
          <div
            className="
            grid grid-cols-1 gap-[30px] w-full 
            md:grid-cols-2 
            lg:grid-cols-7
            xl:max-w-[1290px] h-full "
          >
             <Destination data={filteredData} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
