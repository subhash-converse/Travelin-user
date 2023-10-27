// <========== mock data ==========>
import LastMainDeals from "../Mock/PackageData";

// <========== componets ==========>
import Carowsal from "./LandingCarousel";

const LandingPage = () => {
  return (
    <div className="">
      <Carowsal carouselData={LastMainDeals} />;
    </div>
  );
};

export default LandingPage;
