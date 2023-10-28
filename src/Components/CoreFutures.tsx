// <========== icons ==========>
import {
  faCompass,
  faFlag,
  faLocationDot,
  faSignsPost,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';


// <========== images ==========>
import paint from "../Assets/Images/shape4.png";

const CoreFutures = () => {
  return (
    <div>
      <div
        className="paint px-4 grid grid-flow-row"
        style={{ backgroundImage: `url(${paint})` }}
      >
        <div className="flex flex-col justify-center items-center p-[50px]">
          <h1 className="yellow content-head-1 Play-fair">Core Futures</h1>
          <h1 className="content-head-2 Play-fair">
            <span className="text-[#17233E]">Find </span>
            <span className="text-[#029E9D]">Travel Perfection</span>
          </h1>
          <p className="text-[#777F94] content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="max-w-[1200px] grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            <div className="card  " id="box1">
              <OutlinedFlagSharpIcon style={{height:"60", width:"60px"}} className="card-icon" />
              <h3 className="card-head Play-fair">
                Tell Us What You Want To Do
              </h3>
              <p className="card-para">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia.
              </p>
              <p className="card-review">100+ Reviews</p>
            </div>
            <div className="card">
              <LocationOnOutlinedIcon className="card-icon" style={{height:"60", width:"60px"}} />
              <h3 className="card-head Play-fair">
                Tell Us What You Want To Do
              </h3>
              <p className="card-para">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia.
              </p>
              <p className="card-review">100+ Reviews</p>
            </div>
            <div className="card">
              <SignpostOutlinedIcon style={{height:"60", width:"60px"}} className="card-icon"/>
              <h3 className="card-head Play-fair">
                Tell Us What You Want To Do
              </h3>
              <p className="card-para">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia.
              </p>
              <p className="card-review">100+ Reviews</p>
            </div>
            <div className="card">
              <ExploreOutlinedIcon className="card-icon" style={{height:"60", width:"60px"}}/>
              <h3 className="card-head Play-fair">
                Tell Us What You Want To Do
              </h3>
              <p className="card-para">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia.
              </p>
              <p className="card-review">100+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFutures;
