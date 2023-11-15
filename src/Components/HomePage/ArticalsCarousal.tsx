// <========== icons ==========>
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PackageContent } from "../../interface/common";

const ArticalsCarousal = (props: { data: PackageContent[] }) => {
  return (
    <>
      {props.data.map((data) => (
        <div
          key={`ArticalsCarousal-${data.id}`}
          className="bg-white btn-fromLeft card-hover card-line main-input img-radius w-full  lg:h-[510px]  xl:h-[570px]"
        >
          {}
          <div className="image-box rounded-t-xl">
            <div
              style={{ backgroundImage: `url(${data.image})` }}
              className=" image background-top-pick w-full h-[190px] rounded-t-xl md:h-[221px] xl:h-[274px] flex items-end "
            ></div>
          </div>
          <div className=" p-[24px] ">
            <h3 className="Play-fair text-[18px] text-[#777777] mb-2">
              {data.country}
            </h3>
            <h3 className="Play-fair text-[21px] lg:text-[26px] mb-2">
              {data.territory}
            </h3>
            <div className="mb-4">
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
            </div>
            <p className="text-[#777777] text-[16px] mb-4">
              {data.description}
            </p>

            <div className="flex justify-between">
              <div className=" flex gap-1 items-center">
                <img
                  src={data.guideImage}
                  className="h-[30px] w-[30px] rounded-[50%]"
                  alt=""
                />
                <h3> Sollmond Nell</h3>
              </div>
              <div>
                <button className="button tour-pic-btn py-[8px]">
                  <span className="text">Read more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArticalsCarousal;
