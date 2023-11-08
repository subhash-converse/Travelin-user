// <========== images ==========>
import mountainWithPeoples from "../../Assets/Images/HomeImage/mountain-with-people.png";
import mountain2 from "../../Assets/Images/HomeImage/mountain2.png";


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
      <div className="call-button flex justify-center items-center relative">
  <div className="video-button text-center position-relative">
    <div className="call-button text-center">
      <button
        type="button"
        className="play-btn js-video-button"
        data-video-id="152879427"
        data-channel="vimeo"
      >
        <i className="fa fa-play bg-blue rounded-circle"></i>
      </button>
    </div>
    <div className="video-figure"></div>
  </div>
</div>
        <div className="flex">
          <img
            className="rotate h-[130px] w-[100%] lg:w-[50%]"
            src={mountain2}
            alt="mountain"
          />
          <img
            className="rotate h-[130px] lg:w-[50%] hidden lg:inline-block "
            src={mountain2}
            alt="mountain"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreYourLife;
