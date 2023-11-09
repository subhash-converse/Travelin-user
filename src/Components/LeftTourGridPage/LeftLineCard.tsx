// <========== icons ==========>
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface data {
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
}

const LeftLineCard = (props: { data: data }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 last-deal  rounded-xl  bg-white main-input p-7">
      <div>
        <img
          src={props.data.image}
          alt="tourpic"
          className="rounded-xl w-full h-full"
        />
      </div>
      <div>
        <p className="text-[#777777] text-[13px]">6+ Hours | Full Day Tours </p>
        <h2 className="Play-fair text-[26px] text-[#17233E] pb-[8px]">
          Leeds Castle, Cliffs Of Dover
        </h2>
        <div className="flex">
          <div>
            <LocationOnOutlinedIcon
              style={{ height: "20px", width: "20px" }}
              className="h-[39px]  justify-around"
            />
          </div>
          <div className="Play-fair text-[#029E9D]">{props.data.country}</div>
        </div>
        <p className="mt-[32px] text-[#777777]">Taking Safety Measures</p>
        <p className="text-[#029E9D]">Free cancellation</p>
      </div>
      <div className="justify-self-end text-right">
        <div className="rating-main pb-1 flex justify-end">
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
          </div>
        </div>
        <p className="text-[13px] text-[#777777]">200 Reviews</p>
        <div className="flex flex-col my-[16px]">
          <span>From</span>
          <span className="text-black text-[25px] Play-fair">{`$${props.data.price}`}</span>
          <span>Per Adult</span>
        </div>
        <button className="button tour-pic-btn py-[8px] flex flex-row gap-2">
          <div className="text">View Detail </div>
        </button>
      </div>
    </div>
  );
};

export default LeftLineCard;
