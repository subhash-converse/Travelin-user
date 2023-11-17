import React from "react";
// ............Components.................
import PackageSlider from "../LeftTourGridPage/PackageDetails/PackageSlider";
import PackageContent from "../LeftTourGridPage/PackageDetails/PackageContent";

const PackageDetails = () => {
  return (
    <>
      <div>
        <PackageSlider />
      </div>
      <div>
        <PackageContent />
      </div>
    </>
  );
};

export default PackageDetails;
