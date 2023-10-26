// <========== images ==========>
import peoples from "../Assets/Images/peoples.png";
import travelers from "../Assets/Images/travelers.png";

// <========== icons ==========>
import {
  faBriefcase,
  faFolder,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const GetToKnowUs = () => {
  return (
    <div>
      <div>
        <div
          className="w-full flex justify-center p-4 pt-12 background-travelers"
          style={{ backgroundImage: `url(${peoples})` }}
        >
          <div className="lg:max-w-[1200px] md:grid grid-cols-2">
            <div className="flex flex-col justify-end text-center lg:text-left">
              <h3 className="Play-fair text-[22px] text-[#777777]">
                Get To Know Us
              </h3>
              <h1 className="Play-fair text-[36px] lg:text-[46px] mb-4">
                Explore All Tour Of The World With Us.
              </h1>
              <div className="border-y-[1px] border-dashed border-[#777777] mb-[16px] py-7 text-[#777777] text-[16px]">
                <p className="pb-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>

              <div className="flex justify-between text-[#777777] ">
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span> Tour Guide</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Friendly Price</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faFolder} />
                  <span> Reliable Tour Package</span>
                </div>
              </div>
            </div>

            <div>
              <img src={travelers} alt="travelers" />
            </div>
            <div className=" img-radius w-full col-span-2 main-input grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-[24px] bg-white text-[#777777] lg:w-[80%] lg:gap-9 ">
              <div className="lg:border-r-[1px] border-[#F1F1F1]">
                <h1 className="Play-fair text-[50px] ">100</h1>
                <h3>Years Experiences</h3>
              </div>
              <div className="lg:border-r-[1px] border-[#F1F1F1]">
                <h1 className="Play-fair text-[50px] ">0</h1>
                <h3>Tour Packages</h3>
              </div>
              <div className="lg:border-r-[1px] border-[#F1F1F1]">
                <h1 className="Play-fair text-[50px] ">300</h1>
                <h3>Happy Customers</h3>
              </div>
              <div>
                <h1 className="Play-fair text-[50px]">0</h1>
                <h3>Award Winning</h3>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default GetToKnowUs;
