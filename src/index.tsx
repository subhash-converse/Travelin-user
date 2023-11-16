// <========== react ==========>
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// <========== css ==========>
import "./index.css";
import "./App.css";

// <========== Layouts ==========>
// import HomeLayout from "./Components/Layouts/HomeLayout"
// import LeftTourGrid from "./Components/Layouts/LeftTourGridLayout";
import Routing from "./Components/Routing/Routing";
import { BrowserRouter } from "react-router-dom";

// <========== Common Components ==========>
import Footer from "./Components/CommonComponents/Footer";
import Header from "./Components/CommonComponents/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/*......... Header......... */}
      <div className="sticky top-0 z-[20]">
        <Header />
      </div>
      {/*......... Body......... */}
      <div>
        <Routing />
      </div>
      {/*......... Footer......... */}
      <div>
        <Footer />
      </div>
    </React.StrictMode>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
