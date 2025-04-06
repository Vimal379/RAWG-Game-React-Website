import React, { useEffect } from "react";
import "./../Styles/TrendingGames.css"; 

const TrendingGames = ({ gameList }) => {
  
  return (
    <div className="mt-5 d-none d-md-block">
      <h2 className="fw-bold fs-2 text-light ps-4 mb-5">Trending Games</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 m-2">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div className="col mb-4 " key={index}>
                <div
                  className="pt-2 ps-2 pe-2 pb-10 bg-light rounded overflow-hidden group hover-scale "
                  style={{
                    height: "400px",
                    width: "250px",
                    objectFit: "cover",
                  }}
                >
                  <img
                    src={item.background_image}
                    className="img-fluid rounded"
                    style={{ height: "270px", objectFit: "cover" }}
                    alt={item.name}
                  />
                  <h2 className="fs-4 fw-bold">{item.name.length > 16 ? item.name.slice(0,16) : item.name }</h2>
                  <h3 className="fs-5 ">
                    Released:{" "}
                    <span className="text-primary">{item.released}</span>
                  </h3>
                  <h2 className="fs-5 text-secondary">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
