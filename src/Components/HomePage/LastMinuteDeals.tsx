// <========== Componets ==========>
import Card from "./Card";
import LongCard from "./LongCard";

// <========== MockData ==========>
import carouselData from "../../Mock/PackageData";

// <========== images ==========>
import parashoot from "../../Assets/Images/HomeImage/parashoot.png";

const LastMinuteDeals = () => {
  let lastArray: any = [];
  carouselData.map((data) => {
    let filter = data.catogory.find(
      (a) => a.toLowerCase().trim() === "last minute deals"
    );
    if (filter) {
      return lastArray.push(data);
    } else {
      return null;
    }
  });

  let longArray: any = [];
  carouselData.map((data) => {
    let filter = data.catogory.find(
      (a) => a.toLowerCase().trim() === "long card"
    );
    if (filter) {
      return longArray.push(data);
    } else {
      return null;
    }
  });
  return (
    <div>
      <div>
        <div style={{ backgroundImage: `url(${parashoot})` }}>
          <div className="flex flex-col justify-center items-center p-[50px] pt-[87px]">
            <h1 className="yellow content-head-1 Play-fair">Top Deals</h1>
            <h1 className="content-head-2 Play-fair">
              <span className="text-[#17233E]">The Last </span>
              <span className="text-[#029E9D]">Minute Deals</span>
            </h1>
            <p className="text-[#777F94] content-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="w-full flex justify-center px-4">
            <div className="last-deal-div lg:max-w-[1290px] grid grid-cols-1 lg:grid-cols-5 gap-6 ">
              <div className="grid gap-[31px] md:grid-cols-2 lg:col-span-3 ">
                <Card data={lastArray} />;
              </div>

              <div className="long-card-div grid gap-[31px] lg:col-span-2  ">
                <LongCard data={longArray} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMinuteDeals;
