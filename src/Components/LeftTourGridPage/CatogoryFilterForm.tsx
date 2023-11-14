import React from "react";
import mockData from "../../Mock/PackageData";

const CatogoryFilterForm = ({setFilterFunc, filters}: any) => {
  let catogoryArray: string[] = filters.category;

  const CatogoryFilter = (event: any) => {
    let id = event.target.id;
    let value = event.target.value;

    if (event.target.checked === true) {
      catogoryArray.push(event.target.value);
    } else {
      let index = catogoryArray.findIndex((value2) => {
        return value === value2;
      });
      catogoryArray.splice(index, 1);
    }

    setFilterFunc({ ...filters, category: catogoryArray });
  };



  return (
    <>
      <div className=" border-b-[1px] border-dashed border-[#777777] pb-[30px] mb-[32px]">
        <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">
          Categories Type
        </h1>
        <div className="grid grid-cols-1 gap-3">
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="Tours"
                type="checkbox"
                value={"Tours"}
                onChange={CatogoryFilter}
              />
              <label htmlFor="Tours">Tours</label>
            </div>
            <div>
              <h2>92</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="Attractions"
                type="checkbox"
                value={"Attractions"}
                onChange={CatogoryFilter}
              />
              <label htmlFor="Attractions">Attractions</label>
            </div>
            <div>
              <h2>22</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="DayTrips"
                type="checkbox"
                value={"Day Trips"}
                onChange={CatogoryFilter}
              />
              <label htmlFor="DayTrips"> Day Trips</label>
            </div>
            <div>
              <h2>35</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="OutdoorActivities"
                type="checkbox"
                value={"Outdoor Activities"}
                onChange={CatogoryFilter}
              />
              <label htmlFor="OutdoorActivities">Outdoor Activities</label>
            </div>
            <div>
              <h2>41</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="Concert&Show"
                type="checkbox"
                value={"Concert & Show"}
                onChange={CatogoryFilter}
              />
              <label htmlFor="Concert&Show">Concert & Show</label>
            </div>
            <div>
              <h2>61</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="Indoor"
                type="checkbox"
                value={"Indoor"}
                onChange={CatogoryFilter}
              />
              <label htmlFor="Indoor">Indoor</label>
            </div>
            <div>
              <h2>18</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="SightSeeing"
                type="checkbox"
                value={"Sight Seeing"}
                onChange={CatogoryFilter}
              />
              <label htmlFor="SightSeeing">Sight Seeing</label>
            </div>
            <div>
              <h2>88</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="Travels"
                type="checkbox"
                value={"Travels"}
                onChange={CatogoryFilter}
              />
              <label htmlFor="Travels">Travels</label>
            </div>
            <div>
              <h2>92</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatogoryFilterForm;
