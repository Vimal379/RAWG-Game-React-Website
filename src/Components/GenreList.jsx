import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import "./../Styles/GenreList.css"; 

const GenreList = ({genreId, genreName}) => {
  const [genreListData, setGenreListData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenreListData(res.data.results);
    });
  };

  return (
  <>
    
    <div className="bg-secondary  me-0 h-100 border-right-5 border-primary position-relative">
        <h2 className="fs-2 fw-bold ps-2 text-light d-inline">Genre</h2>
 
      {genreListData.map((item, index) => (
        <div
          onClick={() => {setActiveIndex(index); genreId(item.id);genreName(item.name)}}
          className={`d-flex g-2 max-h-20 align-items-center mb-2 pointer p-2 m-2 rounded-3 genre-item  ${
            activeIndex === index ? "active" : ""
          }`}
          key={index}
        >
          <img loading="lazy"
            src={item.image_background}
            alt=""
            className={`genre-image w-25 h-20 object-cover rounded-3 me-3 ${
              activeIndex === index ? "active-image" : ""
            }`}
            style={{
              height: "80px",
              width: "80px",
            }}
          />
          <h3 className={`fs-4 ${activeIndex === index ? "fw-bold" : ""}`}>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
    </>
  );
};

export default GenreList;
