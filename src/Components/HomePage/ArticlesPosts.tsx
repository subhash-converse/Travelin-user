// <========== MockData ==========>
import carouselData from "../../Mock/PackageData";
import ArticalsCarousal from "./ArticalsCarousal";

const ArticlesPosts = () => {
  
    let articalArray:any = [];
    carouselData.map((data) => {
      let filter = data.catogory.find(
        (a) => a.toLowerCase().trim() === "articles"
      );
      if (filter) {
      return articalArray.push(data)
        
      } else {
        return null;
      }
    })
 
  
  

  return (
    <div  className="">
      <div className="flex flex-col justify-center items-center ]">
        <h1 className="yellow content-head-1 Play-fair pt-[25px]">
          Our Blogs Offers
        </h1>
        <h1 className="content-head-2 Play-fair">
          <span className="text-[#17233E]">Recent </span>
          <span className="text-[#777777]">Articles & Posts</span>
        </h1>
        <p className="text-[#777F94] content-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="w-full flex justify-center p-4">
        <div className="max-w-[1290px] grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        <ArticalsCarousal data={articalArray} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPosts;
