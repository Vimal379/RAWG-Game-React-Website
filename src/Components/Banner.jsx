import React, { useEffect } from "react";
import "./../Styles/Banner.css";
const Banner = ({ gameBanner }) => {
  useEffect(() => {
  }, [gameBanner]);

  return (
    <div className="position-relative m-4 rounded ">
      <div className="position-absolute bottom-0 p-5 bg-gradient-custom w-100">
        <h2 className="fs-14 text-white fw-bold">{gameBanner.name}</h2>
        <button className="btn btn-primary px-4 py-3 fs-12">Get Now</button>
      </div>
      <img
        src={gameBanner.background_image}
        className="md-h-320px w-100 object-cover rounded"
        alt={gameBanner.name}
      />
    </div>
  );
};

export default Banner;
