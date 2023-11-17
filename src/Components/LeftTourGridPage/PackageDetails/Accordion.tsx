import React from "react";

const Accordion = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium border border-[#f1f1f1] rounded-2xl Play-fair text-[18px]">
          Day 1 - Barcelona - Zaragoza - Madrid
        </div>
        <div className="collapse-content mt-4">
          <p className="text-[15px] text-[#777777]">hello</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
