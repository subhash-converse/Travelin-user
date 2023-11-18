import {
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Review } from "../../../interface/common";

const ReviewChat = (props: { chat: Review[] }) => {
  return (
    <>
      {props.chat.map((data) => (
        <div className="md:flex">
          <div className="lg:w-[10%] flex justify-center ">
            <img
              src={"/HomePage/guide1.jpg"}
              className="rounded-lg w-[90px] h-[100px] md:h-[47px] md:w-[43px] lg:w-[37px] lg:h-[41px] xl:w-[45px] xl:h-[50px]"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[90%] relative">
            <div className=" bg-[#F1F1F1] rounded-lg p-[20px] mt-[20px] md:mt-0 md:ml-[30px] text-center md:text-left">
              <div>
                <h2 className="text-[18px] mb-2 Play-fair">{data.user_name}</h2>
                <h2 className="text-[#777777]">April 25, 2022 at 10:46 am</h2>
              </div>
              <div className="rating-main pb-1">
                <div className="rating text-[#FDC703]  ">
                  <span className=" fa-star checked">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className=" fa-star checked">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className=" fa-star checked">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className=" fa-star checked">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className=" fa-star checked">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </div>
              </div>
              <h3 className="text-[16px]">
                <em>Was too noisy and not suitable for business meetings"</em>
              </h3>
              <p className="text-[16px] text-[#777777] my-2">
                {data.description}
              </p>
              <div className="pt-[16px] chat-bottom">
                <button className="button bg-[#029e9d] px-[12px] py-[6px] text-white rounded-xl ">
                  Replay
                </button>
                <div className="mt-4 flex gap-2 justify-center items-center chat-btn">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-[#292e8c]"
                    style={{ fontSize: 18 }}
                  />
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="text-[#777]"
                    style={{ fontSize: 18 }}
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:inline-block bg-[#f1f1f1] h-[35px] w-[35px] absolute top-7 left-3 -z-10 rotate-45"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewChat;
