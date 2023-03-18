import React from "react";
import { Link } from "react-router-dom";

const FourZeroFour = () => {
  return (
    <div
      className="container  d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
      <div><h2 style={{display:'block', fontSize: '50px'}}>404 </h2></div>
      <div>  <p>
        page not found please go <Link to="/">home</Link>
      </p></div>
    </div>
      </div>
  );
};

export default FourZeroFour;
