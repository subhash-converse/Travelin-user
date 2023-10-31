// <========== Componets ==========>
import offer from "../Assets/Images/offer1.jpg";

// <========== MockData ==========>
import carouselData from "../Mock/PackageData";

// <========== icons ==========>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";

const Offer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-[50px] pt-[85px]">
        <h1 className="yellow content-head-1 Play-fair">Top Offers</h1>
        <h1 className="content-head-2 Play-fair">
          <span className="text-[#17233E]"> Special </span>
          <span className="text-[#029E9D]"> Offers & Discount</span>
          <span className="text-[#17233E]"> Packages </span>
        </h1>
        <p className="text-[#777F94] content-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="w-full flex justify-center px-4">
        <div className="grid gap-4 lg:max-w-[1290px] md: grid-cols-l lg:grid-cols-2 lg:gap-7">
          {carouselData.map((data) => {
            let filter = data.catogory.find(
              (a) => a.toLowerCase().trim() === "offer"
            );
            if (filter) {
              return (
                <div className=" grid grid-cols-1 grid-rows-2 md:grid-rows-1 overflow-hidden md:grid-cols-5 img-radius main-input ">
                  <div className="image-box  md:col-span-2 bg-cover relative">
                    
                     <img src={offer} alt="" className="image h-full w-full" />

                     <h3 className="rotate-off bg-[#FDC703] w-[200px]  py-[12px] text-center text-white font-semibold absolute left-[-1] right-[109px] top-[21px]">
                        20% offer
                      </h3>
                  
                  </div>

                  <div className="md:col-span-3 py-[24px] px-[15px]">
                    <h3 className="text-[18px] text-[#777777] Play-fair mb-2">
                      {data.territory}
                    </h3>
                    <h2 className="text-[26px] Play-fair mb-2">
                      {data.country}
                    </h2>
                   
                    <div className="rating text-[#FDC703]  ">
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="ms-2 white">(18)</span>
                          </div>

                    <p className="mb-2 text-[#777777] text-[16px]">
                      {data.description}
                    </p>
                    <div className="text-[#777] text-[16px] pb-4 mb-4">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <span> {`${data.days} Days Tours`} </span>
                    </div>
                    <div className="text-[#777]">
                      <span className="text-[20px] font-semibold">{`$${data.price}`}</span>{" "}
                      <span> | </span>{" "}
                      <span className="text-[16px]">Per person</span>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;
