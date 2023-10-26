// <========== react ==========>
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// <========== css ==========>
import "./index.css";
import "./App.css";

// <========== Layout ==========>

import LandingCarousel from "./Components/landingPage";
import FindHolidayForm from "./Components/findHolidayForm";
import TopDestinations from "./Components/topDestinations";
import BestTourPackages from "./Components/bestTourPackages";
import LastMinuteDeals from "./Components/lastMinuteDeals";
import GetToKnowUs from "./Components/getToKnowus";
import GuideCarousal from "./Components/guidePage";
import Offer from "./Components/offer";
import ExploreYourLife from "./Components/exploreYourLife";
import GoodReviews from "./Components/goodReviews";
import ArticlesPosts from "./Components/articlesPosts";
import Patners from "./Components/partners";
import Footer from "./Components/footer";
import CoreFutures from "./Components/coreFutures";
import Header from "./Components/header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <Header />
    </div>
    <div>
      <LandingCarousel />
    </div>
    <div>
      <FindHolidayForm />
    </div>
    <div>
      <CoreFutures/>
    </div>
    <div>
      <TopDestinations />
    </div>
    <div>
      <BestTourPackages />
    </div>
    <div>
      <LastMinuteDeals />
    </div>
    <div>
      <GetToKnowUs />
    </div>
    <div>
      <GuideCarousal />
    </div>
    <div>
      <Offer />
    </div>
    <div >
      <ExploreYourLife />
    </div>
    <div>
      <GoodReviews/>
    </div>
    <div>
      <ArticlesPosts/>
    </div>
    <div>
      <Patners/>
    </div>
    <div>
      <Footer/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
