// <========== images ==========>
import mountainWithPeoples from "../../Assets/Images/HomeImage/mountain-with-people.png";
import mountain2 from "../../Assets/Images/HomeImage/mountain2.png";

// <========== icons ==========>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faPlay } from "@fortawesome/free-solid-svg-icons";

const ExploreYourLife = () => {
  return (
    <div
      style={{ backgroundImage: `url(${mountainWithPeoples})` }}
      className="bg-no-repeat -500 "
    >
      
      <div className="flex flex-col justify-center items-center p-[50px] pt-[110px]">
        <h1 className="text-[#777F94] content-head-1 Play-fair">
          Love Where Your're Going
        </h1>
        <h1 className="content-head-2 Play-fair">
          <span className="text-[#17233E]">Explore Your Life, </span>
          <span className="yellow">Travel Where You</span>
          <h2 className="yellow">Want!</h2>
        </h1>
        <p className="text-[#777F94] content-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br /> laboreet dolore magna aliqua.
        </p>
      </div>

      <div className="w-full flex flex-col justify-center p-0">
        <div className="call-button flex justify-center items-center ">
       
         <FontAwesomeIcon icon={faPlay}  className="bg-[#777F94] p-5 px-6 rounded-[50%] text-white text-[25px]"/>
       
        </div>
        <div className="flex">
          <img className="rotate h-[130px] w-[100%] lg:w-[50%]" src={mountain2} alt="mountain" />
          <img className="rotate h-[130px] lg:w-[50%] hidden lg:inline-block " src={mountain2} alt="mountain" />

        </div>
      </div>
      
    </div>
  );
};

export default ExploreYourLife;
