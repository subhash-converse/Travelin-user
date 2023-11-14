import interfeces from "../../interface /Interface";

const Destination = (props: { data: interfeces[] }) => {
  return (
    <>
      {props.data.map((eachData, index) =>
        index === 0 ? (
          <div
            key={`Destination-long-${eachData.id}`}
            className="image-box md:col-span-2 lg:row-span-2 lg:col-span-3 img-radius  relative"
          >
            <div className="relative">
              <img
                src={eachData.image}
                alt="destination1"
                className="image  w-full max-h-[675px] main-image rounded-xl"
              />
              <div className="color-overlay "></div>
            </div>

            <div className=" flex justify-between p-[24px] z-10 absolute bottom-0 right-0 left-0 ">
              <div className="Play-fair">
                <h3 className="yellow text-[18px]">{eachData.country}</h3>
                <h3 className="white text-[21px] md:text-[26px]">
                  {eachData.territory}
                </h3>
              </div>
              <div className="flex items-end">
                <button className="destination-btn text-[16px]">{`${eachData.days} days`}</button>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={`Destination-long-short${eachData.id}`}
            className="lg:col-span-2 image-box img-radius relative"
          >
            <div>
              <img
                src={eachData.image}
                alt=""
                className="image rounded-xl h-full"
              />
            </div>

            <div className=" w-full flex justify-between p-[24px] absolute bottom-0 left-0 right-0">
              <div className="Play-fair">
                <h3 className="yellow">{eachData.country}</h3>
                <h3 className="white text-[21px] md:text-[26px]">
                  {eachData.territory}
                </h3>
              </div>
              <div className="flex items-end">
                <button className="destination-btn text-[16px]">{`${eachData.days} days`}</button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Destination;
