// <========== icons ==========>
import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface data {
  data: {
    id:number;
    image: any;
    country: string;
    touristPlace: string;
    reviewsStar: number;
    description: string;
    catogory: string[];
    price: number;
    territory: string;
    days: number;
  };
}

const LongCard = (props: data) => {
  return (
    <div key={props.data.id}>
      {
        <div className=" long-card-width image-box rounded-lg relative   h-[180px] md:h-[368px] md:w-full grid items-center md:items-end ">
          <div className="image-box h-full w-full">
            <img
              className="image h-full w-full"
              src={props.data.image}
              alt=""
            />
          </div>

          <div className="absolute bottom-0 p-3">
            <h3 className="yellow Play-fair text-[18px] mb-2">
              {props.data.territory}
            </h3>
            <h3 className="white Play-fair text-[18px] mb-2">
              {props.data.country}
            </h3>
            <div className="rating text-[#FDC703]  ">
              <span className="fa fa-star checked">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="fa fa-star checked">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="fa fa-star checked">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="fa fa-star checked">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="fa fa-star checked">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="ms-2 white">(18)</span>
            </div>

            <div className="flex justify-between">
              <div className="white">
                <span className="yellow font-semibold">{`$${props.data.price}`}</span>{" "}
                <span> | </span> <span>Per person</span>
              </div>
              <div className="text-[white]">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span> {`${props.data.days} Days Tours`} </span>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default LongCard;
