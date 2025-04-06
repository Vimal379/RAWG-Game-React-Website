import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const GameDetail = () => {
  const location = useLocation();
  const { game } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  

  useEffect(() => {
    if (!game) {
      setLoading(false);
      setError("No Game Data Available");
    } else {
      setLoading(false);
    }
  }, [game]);

  const custCss = 'fs-2 bg-dark text-primary rounded p-2 m-2';

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>;
  }

  const emojis = {
    pc: "bi bi-pc-display-horizontal",
    playstation: "bi bi-playstation",
    xbox: "bi bi-xbox",
    apple: "bi bi-apple",
    nintendo: "bi bi-controller",
  };

  const imageUrls = game.short_screenshots?.map(screenshot => screenshot.image) || [];

  const handleNavigate = () => {
    navigate(`/`);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between
      ">
        <h1 className="fw-bold text-dark">Game Details :</h1>
        <button className="bg-primary text-white rounded-pill outline-none border-0 px-4 py-1" onClick={()=>handleNavigate()}>Go Back</button>
      </div>
      
      <img
        src={game.background_image}
        alt={game.name || "Game Background"}
        className="img-fluid my-4 rounded"
        style={{
          border: "3px solid black",
          boxShadow: "5px 5px 15px rgba(33, 23, 182, 0.6)"
        }}
      />
      <h2 className="fs-1 text-danger">
        {game.name}{" "}
        <span className="bg-success text-light p-1 m-1 fs-2 rounded">
          {game.metacritic}
        </span>
      </h2>
      <p className="fs-3 text-dark">Rating: ⭐{game.rating}</p>
      <p className="fs-3 text-dark">Reviews: 💬{game.reviews_count}</p>
      <p className="fs-3 text-dark">Suggestions: 🔥{game.suggestions_count}</p>
      <div className="d-flex">
        <p className="fs-3 text-dark me-2">Genres:</p>
        {game.genres.map((item, index) => (
          <h2
            className="fs-4 rounded-pill bg-secondary d-inline pt-1 pb-0 px-3 m-1 text-light"
            key={index}
          >
            {item.name}
          </h2>
        ))}
      </div>
      <div>
        <p className="fs-3 text-dark">Platforms:</p>
        <div className="d-flex flex-row justify-content-start align-items-center flex-wrap  mb-2">
          {game.parent_platforms.map((item, idx) => (
            <i
              className={`${custCss} ${emojis[item.platform.name.toLowerCase()] || "bi bi-apple"}`}
              key={idx}
            >
              <span className="fs-4 ms-3">{item.platform.name}</span>
            </i>
          ))}
        </div>
      </div>
      <p className="fs-3 text-dark">
        Released date: <span className="fs-4">{game.released}</span>
      </p>
      <div>
        <p className="fs-3 text-dark">ScreenShots</p>
        <div className="d-flex  flex-row overflow-auto shadow p-3 mb-5 rounded">
          {imageUrls.length > 0 ? (
            imageUrls.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Screenshot ${index + 1}`}
                className="rounded object-cover m-2"
                style={{
                  height: "300px",
                  width: "300px",
                  border: "3px solid black",
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)"
                }}
              />
            ))
          ) : (
            <div>No screenshots available</div>
          )}
        </div>
      </div>
      <div className="">
          <p className="fs-3 text-dark">Description :</p>
          <p>{game.name}, released on {game.released}, is a gripping open-world action RPG that blends cinematic storytelling with deep, choice-driven gameplay. Currently sitting at an impressive {game.rating} rating from many players, the game has earned critical 🔥acclaim for its breathtaking visuals, emotionally rich narrative, and dynamic combat system. Players praise the game’s immersive world-building—“It’s like stepping into a living painting,” one reviewer noted—and the seamless blend of exploration, puzzle-solving, and heart-pounding battles. Available on PlayStation 5, Xbox Series X|S, and PC, {game.name} delivers a next-gen experience with ray-traced graphics, real-time weather systems, and branching quests that evolve based on your decisions. Whether you're uncovering the forgotten lore of the Elderglow Isles or battling shadowbeasts in the Obsidian Caverns, the world reacts and remembers. With regular content updates, mod support on PC, and a thriving online co-op mode, this is more than a game—it's a universe waiting to be shaped by you.</p>
      </div>
    </div>
  );
};

export default GameDetail;
