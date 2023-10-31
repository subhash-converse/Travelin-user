// <========== icons ==========>
import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// <========== images ==========>
import topPick1 from "../Assets/Images/TopPick1.jpg";
import guide from "../Assets/Images/guide1.jpg";



interface data{
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
  };
}

const ArticalsCarousal = (props:data) => {
  return (
    <div className="bg-white main-input img-radius w-full  lg:h-[510px]  xl:h-[570px]">
      <div className="image-box rounded-t-xl">
      <div
        style={{ backgroundImage: `url(${topPick1})` }}
        className=" image background-top-pick w-full h-[190px] rounded-t-xl md:h-[221px] xl:h-[274px] flex items-end "
      > 
      </div>
      </div>
      

      <div className=" p-[24px] ">
        <h3 className="Play-fair text-[18px] text-[#777777] mb-2">
          {props.data.country}
        </h3>
        <h3 className="Play-fair text-[21px] lg:text-[26px] mb-2">{props.data.territory}</h3>
        <div className="mb-4">
        <div className="rating text-[#FDC703]  ">
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="fa fa-star checked"><FontAwesomeIcon icon={faStar} /></span>
                          <span className="ms-2 white">(18)</span>
                          </div>
        </div>
        <p className="text-[#777777] text-[16px] mb-4">{props.data.description}</p>
     
        <div className="flex justify-between">
          <div className=" flex gap-1 items-center">
            <img src={guide} className="h-[30px] w-[30px] rounded-[50%]" alt="" />
            <h3> Sollmond Nell</h3>
          </div>
          <div>
            <button className="button tour-pic-btn py-[8px]"><span className="text">Read more</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticalsCarousal