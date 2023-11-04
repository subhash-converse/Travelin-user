// <========== MockData ==========>
import destination1 from "../../Assets/Images/HomeImage/destination2.jpg";

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
      <div className="image-box md:col-span-2 lg:row-span-2 lg:col-span-3 img-radius  relative">
   
    <div className="h-full">
         <img src={destination1} alt="destination1" className= "image h-full w-full main-image rounded-xl" />
    </div>

     
      <div className=" flex justify-between p-[24px] z-10 absolute bottom-0 right-0 left-0 ">
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

    <div className="lg:col-span-2 image-box img-radius relative">
    
  
  <div>
    <img src={destination1} alt="" className="image" />
  </div>

    <div className=" w-full flex justify-between p-[24px] absolute bottom-0 left-0 right-0">
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
    </>
    
  );
};

export default Destination;
