// <========== mock data ==========>
import LastMainDeals from "../Mock/PackageData";

// <========== componets ==========>
import Carowsal from "./LandingCarousel";

const LandingPage = () => {
  return (
    <div>
      <Carowsal carouselData={LastMainDeals} />;
    </div>
  );
};

export default LandingPage;
