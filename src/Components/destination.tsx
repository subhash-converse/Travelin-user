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
          lg:row-span-2  lg:h-[687px]"
    >
      <div className="w-full flex justify-between p-[24px]">
        <div className="Play-fair">
          <h3 className="yellow">{props.data.country}</h3>
          <h3 className="white">{props.data.territory}</h3>
        </div>
        <button className="destination-btn">{`${props.data.days} days`}</button>
      </div>
    </div>

    :

    <div
    style={{ backgroundImage: `url(${destination1})` }}
    className="background-img img-radius h-[333px] flex items-end"
  >
    <div className="w-full flex justify-between p-[24px]">
      <div className="Play-fair">
        <h3 className="yellow">{props.data.country}</h3>
        <h3 className="white">{props.data.territory}</h3>
      </div>
      <button className="destination-btn">{`${props.data.days} days`}</button>
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
