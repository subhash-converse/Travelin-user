// <========== MockData ==========>
import LastMainDeals from "../../Mock/PackageData";

// <========== Conponents ==========>
import ReviewComponent from "./ReviewCarousel";

const GoodReviews = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="yellow content-head-1 Play-fair">Our Testimonails</h1>
        <h1 className="content-head-2 Play-fair">
          <span className="text-[#17233E]">Good Reviews By </span>
          <span className="text-[#777777]">Clients</span>
        </h1>
        <p className="text-[#777F94] content-para">
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </i>
        </p>
      </div>

      <div className='className="w-full flex justify-center p-4  background-travelers"'>
        <div className="lg:max-w-[1290px] grid grid-cols-1  ">
          <ReviewComponent carouselData={LastMainDeals} />
        </div>
      </div>
    </div>
  );
};

export default GoodReviews;
