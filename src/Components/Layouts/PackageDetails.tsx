import React from "react";
// ............Components.................
import PackageSlider from "../LeftTourGridPage/PackageDetails/PackageSlider";
import PackageDetailContent from "../LeftTourGridPage/PackageDetails/PackageDetailContent";

const PackageDetails = () => {
  return (
    <>
      <div>
        <PackageSlider />
      </div>
      <div>
        <PackageDetailContent />
      </div>
    </>
  );
};

export default PackageDetails;
