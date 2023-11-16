import { Routes, Route } from "react-router-dom";

// ................componets.....................
import Home from ".././Layouts/HomeLayout";
import LeftSideGrid from ".././Layouts/LeftTourGridLayout";
import PackageDetails from "../Layouts/PackageDetails"

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="leftGrid" element={<LeftSideGrid />} />
      <Route path="PackageDetails" element={<PackageDetails />} />
    </Routes>
  );
};

export default Routing;
