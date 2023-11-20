import { Routes, Route } from "react-router-dom";

// ................componets.....................
import Home from ".././Layouts/HomeLayout";
import LeftSideGrid from ".././Layouts/LeftTourGridLayout";
import PackageDetails from "../Layouts/PackageDetails";
import BooknowLayout from "../Layouts/BookNowLayout";

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="leftGrid" element={<LeftSideGrid />} />
      <Route path="packageDetails/:id" element={<PackageDetails />} />
      <Route path="packageDetails/:id/book-now" element={<BooknowLayout />} />
    </Routes>
  );
};

export default Routing;
