import React from 'react'

// <========== Layout ==========>

import LandingPage from "../HomePage/LandingPage";
import FindHolidayForm from "../HomePage/FindHolidayForm";
import TopDestinations from "../HomePage/TopDestinations";
import BestTourPackages from "../HomePage/BestTourPackages";
import LastMinuteDeals from "../HomePage/LastMinuteDeals";
import GetToKnowUs from "../HomePage/GetToKnowus";
import GuideCarousal from "../HomePage/GuidePage";
import Offer from "../HomePage/Offer";
import ExploreYourLife from "../HomePage/ExploreYourLife";
import GoodReviews from "../HomePage/GoodReviews";
import ArticlesPosts from "../HomePage/ArticlesPosts";
import CoreFutures from "../HomePage/CoreFutures";
import Patners from '../HomePage/Partners';

const HomeLayout = () => {
  return (
    <>
    <div>
      <LandingPage />
    </div>
    <div>
      <FindHolidayForm />
    </div>
    <div >
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
    </>
  )
}

export default HomeLayout;