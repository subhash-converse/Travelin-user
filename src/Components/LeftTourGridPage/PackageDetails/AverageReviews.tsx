import React from "react";
import {ReviewSummary} from "../../../interface/common"

const AverageReviews = (props:{averageReview:ReviewSummary}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full ">
      <div className="rounded-xl bg-[#17233E] text-white Play-fair mx-[15px] px-2 py-[32px] text-center">
        <h1 className="text-[46px] mb-2">{`${props.averageReview.total_summary}/5`}</h1>
        <h2 className="text-[22px] mb-2">"Feel So Much Worst Than Thinking"</h2>
        <h3 className="poppins text-white">From 40 Reviews</h3>
      </div>
      <div className="px-[15px] col-span-2">
        <div className="flex flex-col justify-evenly h-full">
          <div className="progress-item mb-1">
            <p className="mb-0 text-[#777777]">Cleanliness</p>
            <div className="progress rounded-xl ">
              <div
                className="progress-bar bg-theme rounded-xl rounded-r-none  w-[10%] "
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                style={{width:`${props.averageReview.cleanliness * 10}%`}}
              >
                <span className="sr-only">{`${props.averageReview.cleanliness * 10}%`} Complete</span>
              </div>
            </div>
          </div>

          <div className="progress-item mb-1">
            <p className="mb-0 text-[#777777]">Facilities</p>
            <div className="progress rounded-xl">
              <div
                className="progress-bar bg-theme  rounded-xl rounded-r-none   "
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                style={{width:`${props.averageReview.facilities * 10}%`}}
              >
                <span className="sr-only">{`${props.averageReview.facilities * 10}%`} Complete</span>
              </div>
            </div>
          </div>

          <div className="progress-item mb-1">
            <p className="mb-0 text-[#777777]">Value for money</p>
            <div className="progress rounded-xl">
              <div
                className="progress-bar bg-theme  rounded-xl rounded-r-none   "
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                style={{width:`${props.averageReview.value_for_money * 10}%`}}
              >
                <span className="sr-only">{`${props.averageReview.value_for_money * 10}%`} Complete</span>
              </div>
            </div>
          </div>

          <div className="progress-item mb-1">
            <p className="mb-0 text-[#777777]">Service</p>
            <div className="progress rounded-xl">
              <div
                className="progress-bar bg-theme  rounded-xl rounded-r-none   "
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                style={{width:`${props.averageReview.service * 10}%`}}
              >
                <span className="sr-only">{`${props.averageReview.service * 10}%`} Complete</span>
              </div>
            </div>
          </div>

          <div className="progress-item mb-1">
            <p className="mb-0 text-[#777777]">Location</p>
            <div className="progress rounded-xl">
              <div
                className="progress-bar bg-theme  rounded-xl rounded-r-none   "
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                style={{width:`${props.averageReview.location * 10}%`}}
              >
                <span className="sr-only">{`${props.averageReview.location * 10}%`} Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageReviews;
