import { Routes, Route } from "react-router-dom";

// ................componets.....................
import Home from ".././Layouts/HomeLayout";
import LeftSideGrid from ".././Layouts/LeftTourGridLayout";

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="leftGrid" element={<LeftSideGrid />} />
    </Routes>
  );
};

export default Routing;
