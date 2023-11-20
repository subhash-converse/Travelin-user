import React, { useState } from "react";
import { DayPlan } from "../../../interface/common";

const Accordion = (props: { accordian: DayPlan[] }) => {
  const [selectedDay, setSelectedDay] = useState<any>(null);

  return (
    <div className="flex flex-col gap-4">
      {props.accordian.map((data) => (
        <div className="collapse collapse-arrow ">
          <input
            type="radio"
            name="my-accordion-2"
            onClick={() => {
              setSelectedDay(data.day);
            }}
          />
          <div
            id={`${data.day}`}
            className={`collapse-title  text-xl font-medium border border-[#f1f1f1] rounded-2xl Play-fair text-[18px] ${
              data.day == selectedDay ? "accordian" : ""
            }`}
          >
            {`day ${data.day}-${data.city}`}
          </div>
          <div className="collapse-content mt-4">
            <p className="text-[15px] text-[#777777]">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
