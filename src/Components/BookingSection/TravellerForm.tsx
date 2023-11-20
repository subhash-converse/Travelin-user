import React from "react";

const TravellerForm = () => {
  return (
    <div>
      <h3 className="text-[22px] border-b border-dashed mb-4 pb-4  text-[black] Play-fair">
        Traveller Information
      </h3>
      <h4 className="text-[18px] mb-[16px] Play-fair">
        Let Us Know Who You Are
      </h4>
      <form action="" className="text-[15px] text-[#777777]">
        <div className="flex flex-col gap-[35px] md:flex-row">
          <div className="md:w-[20%]">
            <label htmlFor="Title">Title</label>

            <div className=" w-full select-div ">
              <select name="" id="" className="select-input bg-white w-full ">
                <option value="">select</option>
                <option value="">Mr</option>
                <option value="">Ms</option>
              </select>
            </div>
          </div>
          <div className="md:w-[40%]">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              id="FirstName"
              placeholder="First Name"
              className="booking-input w-full"
            />
          </div>
          <div className="md:w-[40%]">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              id="LastName"
              placeholder="Last Name"
              className="booking-input w-full"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="md:flex w-full gap-[35px]">
            <div className="w-full">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                id="Email"
                placeholder="Email Address"
                className="booking-input w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                id="Phone"
                placeholder="Phone No"
                className="booking-input w-full"
              />
            </div>
          </div>

          <div className="md:flex w-full gap-[35px]">
            <div className="w-full">
              <label htmlFor="Gender">Gender</label>
              <div className=" w-full select-div ">
                <select name="" id="" className="select-input bg-white w-full ">
                  <option className="m-4" value="">
                    Gender
                  </option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="DOB">DOB</label>
              <input type="date" id="DOB" className="booking-input w-full" />
            </div>
          </div>

          <div className="md:flex w-full gap-[35px]">
            <div className="w-full">
              <label htmlFor="Country">Select Country</label>
              <div className=" w-full select-div ">
                <select name="" id="" className="select-input bg-white w-full ">
                  <option className="m-4" value="">
                    Albania
                  </option>
                  <option value="">Malaysia</option>
                  <option value="">Singapore</option>
                  <option value="">Japan</option>
                  <option value="">Thailand</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="City">Select City</label>
              <div className=" w-full select-div ">
                <select name="" id="" className="select-input bg-white w-full ">
                  <option className="m-4" value="">
                    Istanbul
                  </option>
                  <option value="">London</option>
                  <option value="">Texas</option>
                  <option value="">Tokio</option>
                  <option value="">Bankok</option>
                </select>
              </div>
            </div>
          </div>

          <div className="md:flex w-full gap-[35px]">
            <div className="w-full">
              <label htmlFor="Address1">Address Line 1</label>
              <input
                type="text"
                id="Address1"
                placeholder="Address Line 1"
                className="booking-input w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="Address2">Address Line 2</label>
              <input
                type="text"
                id="Address2"
                placeholder="Address Line 2"
                className="booking-input w-full"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TravellerForm;
