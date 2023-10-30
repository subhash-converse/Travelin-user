// <========== MockData ==========>
import destination1 from "../Assets/Images/destination2.jpg";

interface data {
  data: {
    image: any;
    country: string;
    touristPlace: string;
    reviewsStar: number;
    description: string;
    catogory: string[];
    price: number;
    territory: string;
    days: number;
    guideName?: string;
    position?: string;
  },
index:number
}

const Destination = (props: data) => {

  
  return (
    <>
    {
      (props.index === 0) ? 
      <div
      style={{ backgroundImage: `url(${destination1})` }}
      className="background-img img-radius h-[380px] 
          md:col-span-2  flex items-end
          lg:row-span-2  lg:h-[690px]
          lg:col-span-3"
    >
      <div className="w-full flex justify-between p-[24px]">
        <div className="Play-fair">
          <h3 className="yellow text-[18px]">{props.data.country}</h3>
          <h3 className="white text-[21px] md:text-[26px]">{props.data.territory}</h3>
        </div>
        <div className="flex items-end">
        <button className="destination-btn text-[16px]">{`${props.data.days} days`}</button>
        </div>
      </div>
    </div>

    :

    <div
    style={{ backgroundImage: `url(${destination1})` }}
    className="background-img img-radius h-[333px] flex items-end  lg:col-span-2 "
  >
    <div className="w-full flex justify-between p-[24px]">
      <div className="Play-fair">
        <h3 className="yellow">{props.data.country}</h3>
        <h3 className="white text-[21px] md:text-[26px]">{props.data.territory}</h3>
      </div>
       <div className="flex items-end">
        <button className="destination-btn text-[16px]">{`${props.data.days} days`}</button>
        </div>
    </div>
  </div> 

    }
    {/* <div
      style={{ backgroundImage: `url(${destination1})` }}
      className="background-img img-radius h-[380px] 
          md:col-span-2  flex items-end
          lg:row-span-2  lg:h-[687px]"
    >
      <div className="w-full flex justify-between p-[24px]">
        <div className="Play-fair">
          <h3 className="yellow">{props.data.country}</h3>
          <h3 className="white">{props.data.territory}</h3>
        </div>
        <button className="destination-btn">{`${props.data.days} days`}</button>
      </div>
    </div> */}



     {/* <div
      style={{ backgroundImage: `url(${destination1})` }}
      className="background-img img-radius h-[380px] flex items-end"
    >
      <div className="w-full flex justify-between p-[24px]">
        <div className="Play-fair">
          <h3 className="yellow">{props.data.country}</h3>
          <h3 className="white">{props.data.territory}</h3>
        </div>
        <button className="destination-btn">{`${props.data.days} days`}</button>
      </div>
    </div> */}
    
    </>
    
  );
};

export default Destination;
