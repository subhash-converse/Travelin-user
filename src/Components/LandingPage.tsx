// <========== mock data ==========>
import LastMainDeals from "../Mock/PackageData";

// <========== componets ==========>
import LandingCarousel from "./LandingCarousel";

const LandingPage = () => {
  return (
    <div>
      <LandingCarousel carouselData={LastMainDeals} />
    </div>
  );
};

export default LandingPage;
