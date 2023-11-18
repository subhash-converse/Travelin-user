const DurationFilterForm = ({ setFilterFunc, filters }: any) => {
  let durationArray: string[] = filters.duration;

  const durationFilter = (event: any) => {
    let value = event.target.value;

    if (event.target.checked === true) {
      durationArray.push(value);
    } else {
      let index = durationArray.findIndex((value2) => {
        return value2 === value;
      });
      durationArray.splice(index, 1);
    }
    setFilterFunc({ ...filters, duration: durationArray });
  };

  return (
    <>
      <div className=" border-b-[1px] border-dashed border-[#777777] pb-[30px] mb-[32px]">
        <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">
          Duration Type
        </h1>
        <div className="grid grid-cols-1 gap-3">
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="1-5"
                type="checkbox"
                value={"1-5"}
                onChange={durationFilter}
              />
              <label htmlFor="1-5">1 to 5 days</label>
            </div>
            <div>
              <h2>22</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="1-10"
                type="checkbox"
                value={"6-10"}
                onChange={durationFilter}
              />
              <label htmlFor="1-10"> 6 to 10 days</label>
            </div>
            <div>
              <h2>35</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="1-15"
                type="checkbox"
                value={"11-15"}
                onChange={durationFilter}
              />
              <label htmlFor="1-15">11 to 15 days</label>
            </div>
            <div>
              <h2>41</h2>
            </div>
          </div>
          <div className="checkbox-inputs">
            <div className="input-lable">
              <input
                id="days>15"
                type="checkbox"
                value={"16-20"}
                onChange={durationFilter}
              />
              <label htmlFor="days>15">16 to 20 days</label>
            </div>
            <div>
              <h2>41</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DurationFilterForm;
