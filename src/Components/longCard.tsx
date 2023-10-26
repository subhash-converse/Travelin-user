// <========== Componets ==========>
import longcard1 from "../Assets/Images/long-card3.jpg";

// <========== icons ==========>
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  };
}

const LongCard = (props: data) => {
  return (
    <div>
      {
        <div
          className="background-img img-radius p-[16px] h-[180px] md:h-[400px]  grid items-center md:items-end"
          style={{ backgroundImage: `url(${longcard1})` }}
        >
          <div>
            <h3 className="yellow Play-fair text-[18px] mb-2">
              {props.data.territory}
            </h3>
            <h3 className="white Play-fair text-[18px] mb-2">
              {props.data.country}
            </h3>
            <span className="yellow text-[18px] mb-4">Star</span>

            <div className="flex justify-between">
              <div className="white">
                <span className="yellow">{`$${props.data.price}`}</span>{" "}
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
