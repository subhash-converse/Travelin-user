// <========== react ==========>
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// <========== css ==========>
import "./index.css";
import "./App.css";

// <========== Layout ==========>

import LandingCarousel from "./Components/LandingPage";
import FindHolidayForm from "./Components/FindHolidayForm";
import TopDestinations from "./Components/TopDestinations";
import BestTourPackages from "./Components/BestTourPackages";
import LastMinuteDeals from "./Components/LastMinuteDeals";
import GetToKnowUs from "./Components/GetToKnowus";
import GuideCarousal from "./Components/GuidePage";
import Offer from "./Components/Offer";
import ExploreYourLife from "./Components/ExploreYourLife";
import GoodReviews from "./Components/GoodReviews";
import ArticlesPosts from "./Components/ArticlesPosts";
import Patners from "./Components/Partners";
import Footer from "./Components/Footer";
import CoreFutures from "./Components/CoreFutures";
import Header from "./Components/Header";

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
