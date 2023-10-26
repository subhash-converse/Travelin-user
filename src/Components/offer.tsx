// <========== Componets ==========>
import offer from "../Assets/Images/offer1.jpg";

// <========== MockData ==========>
import carouselData from "../Mock/PackageData";

// <========== icons ==========>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Offer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-[50px]">
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
      <div className="w-full flex justify-center p-4">
        <div className="grid gap-4 lg:max-w-[1200px] md: grid-cols-l lg:grid-cols-2 lg:gap-7">
          {carouselData.map((data) => {
            let filter = data.catogory.find(
              (a) => a.toLowerCase().trim() == "offer"
            );
            if (filter) {
              return (
                <div className=" grid grid-cols-1 grid-rows-2 md:grid-rows-1  md:grid-cols-5 img-radius main-input">
                  <div
                    style={{ backgroundImage: `url(${offer})` }}
                    className=" md:col-span-2 rounded-t-xl md:rounded-t-none md:rounded-l-xl background-img"
                  ></div>

                  <div className="md:col-span-3 py-[24px] px-[15px]">
                    <h3 className="text-[18px] text-[#777777] Play-fair mb-2">
                      {data.territory}
                    </h3>
                    <h2 className="text-[26px] Play-fair mb-2">
                      {data.country}
                    </h2>
                    <span className="pb-4 ">Start</span>
                    <p className="mb-2 text-[#777777] text-[16px]">
                      {data.description}
                    </p>
                    <div className="text-[#777] text-[16px] pb-4 mb-4">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <span> {`${data.days} Days Tours`} </span>
                    </div>
                    <div className="text-[#777]">
                      <span className="text-[20px]">{`$${data.price}`}</span>{" "}
                      <span> | </span>{" "}
                      <span className="text-[16px]">Per person</span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;
