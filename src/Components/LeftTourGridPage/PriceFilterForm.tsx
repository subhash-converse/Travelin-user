import MultiRangeSlider from "./MultiRangeSlider";

const PriceFilterForm = ({ setFilterFunc, filters }: any) => {
  let priceArray: number[] = filters.price;

  const PriceFilter = (min: number, max: number) => {
    if (min !== priceArray[0] || max !== priceArray[1]) {
      priceArray[0] = min;
      priceArray[1] = max;
      setFilterFunc({ ...filters, price: priceArray });
    }
  };

  return (
    <>
      <div className=" border-b-[1px] border-dashed border-[#777777] pb-[60px] mb-[32px] ">
        <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">
          Duration Type
        </h1>
        <h2 className="mb-[16px]">Price Range</h2>
        <MultiRangeSlider
          min={0}
          max={2000}
          onChange={({ min, max }) => {
            PriceFilter(min, max);
          }}
        />
      </div>
    </>
  );
};

export default PriceFilterForm;
