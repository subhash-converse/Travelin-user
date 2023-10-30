// <========== icons ==========>
import {
  faBars,
  faMagnifyingGlass,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// <========== images ==========>
import logo from "../Assets/Images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="top-head hidden lg:inline-flex justify-center bg-[#029E9D] h-10 w-full text-white">
        <div className="w-[90%]  lg:max-w-[1296px] flex justify-between">
          <div className="flex items-center ">
            <div className="border-r-[1px] border-[#35B0AF] pr-[15px] flex  ">
                <CalendarMonthOutlinedIcon className="" style={{ width: '19px', height: '16px' }}/>{" "}
              <span className="">Thursday, Mar 26, 2021</span>
            </div>
            <div className="border-r-[1px] border-[#35B0AF] px-[15px] flex items-center">
            <LocationOnOutlinedIcon  className="" style={{  width: '19px', height: '17px' }}/>
              <span>Hollywood, America</span>
            </div>
            <div className="pl-[15px] flex items-center">
              <div><WatchLaterOutlinedIcon className="" style={{ width: '19px', height: '17px' }}/></div>
              <div>Mon-Fri: 10 AM-5 PM</div> 
            </div>
          </div>
          <div>
            <div className="flex h-full justify-center items-center">
              <div className=" px-[14px]   border-r-[1px] border-[#35B0AF]">
                <FacebookOutlinedIcon style={{  width: '19px', height: '17px' }}/>
              </div>
              <div className=" px-[15px] border-r-[1px] border-[#35B0AF]">
             
                <TwitterIcon style={{  width: '19px', height: '17px' }} />
              </div>
              <div className=" px-[15px]  border-r-[1px] border-[#35B0AF]">
                <InstagramIcon style={{  width: '19px', height: '17px' }} />
              </div>
              <div className=" pl-[14px] ">
                <LinkedInIcon style={{  width: '19px', height: '17px' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="h-[100px]  flex justify-center items-center">
        <div className="flex w-[90%] justify-between md:max-w-[696px] lg:max-w-[1296px] ">
          <div className='xl:inline-flex items-center'>
              <div className="pt-[1px]">
               <img src={logo} alt="Travelin" className="" />
              </div>
          </div>
          
{/* .......................................................................................... */}

{/* <div className='flex items-center'>
<div className='  '>
<ButtonToolbar className=''>
    <Dropdown title="Dropdown" className='relative z-10'>
      <Dropdown.Item className=''>Item 1</Dropdown.Item>
      <Dropdown.Menu title="Right Item 2">
        <Dropdown.Menu title="Item 2-1">
          <Dropdown.Item>Item 2-1-1</Dropdown.Item>
          <Dropdown.Item active>Item 2-1-2</Dropdown.Item>
          <Dropdown.Item>Item 2-1-3</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Item>Item 2-2</Dropdown.Item>
        <Dropdown.Item>Item 2-3</Dropdown.Item>
      </Dropdown.Menu>
      <Dropdown.Menu title="Left Item 3">
        <Dropdown.Menu title="Item 3-1">
          <Dropdown.Item>Item 3-1-1</Dropdown.Item>
          <Dropdown.Item active>Item 3-1-2</Dropdown.Item>
          <Dropdown.Item>Item 3-1-3</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Item>Item 3-2</Dropdown.Item>
        <Dropdown.Item>Item 3-3</Dropdown.Item>
      </Dropdown.Menu>
      <Dropdown.Item>Item 4</Dropdown.Item>
      <Dropdown.Item>Item 5</Dropdown.Item>
      <Dropdown.Item>Item 6</Dropdown.Item>
    </Dropdown>
  </ButtonToolbar>
</div>
  </div> */}

          <div className="hidden xl:inline-flex w-auto items-center gap-x-5">
            <span className="nav">HOME</span>
            <span className="nav">ABOUT US</span>
            <select
              name="destination"
              id="destination"
              className="w-[140px] nav    "
            >
              <option value="" selected hidden>
                DESTINATION
              </option>
              <option value="">Destination List</option>
              <option value="">Destination Details</option>
            </select>
            <select name="tours" id="tours" className="dropdown-land nav">
              <option value="" selected hidden>
                TOURS
              </option>
              <option value="">Tour List</option>
              <option value="">Tour Grid</option>
              <option value="">Tour Single</option>
            </select>
            <select name="pages" id="pages" className="dropdown-land nav">
              <option value="" selected hidden>
                BLOG
              </option>
              <option value="">Our Guide</option>
              <option value="">Booking</option>
              <option value="">Confirmation</option>
              <option value="">Services</option>
              <option value="">Gallery</option>
              <option value="">Error</option>
            </select>
            <div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="nav text-[12px]"
              />
            </div>
          </div>
{/* ................................................................................ */}
          <div className="flex">
            <FontAwesomeIcon
              icon={faBars}
              className="self-center h-[20px] xl:hidden"
            />
            <div className="hidden xl:inline-flex items-center gap-2">
              <span className="text-[#868686] mr-4 text-[15px]">
                <PersonOutlineOutlinedIcon className="mb-[7px] "/>
                LOGIN/REGISTER
              </span>

              <button className="book-now">BOOK NOW</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
