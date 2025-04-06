import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Bookmark = () => {
  const [gameArray, setGameArray] = useState([]);
  const navigate = useNavigate();

  const removeBookmark = (gameId) => {
    const updatedBookmarks = gameArray.filter((game) => game.id !== gameId);
    localStorage.setItem(
      "likedGames",
      JSON.stringify(
        updatedBookmarks.reduce((acc, game) => {
          acc[game.id] = game;
          return acc;
        }, {})
      )
    );
    setGameArray(updatedBookmarks);
  };

  useEffect(() => {
    const storedLikedGames =
      JSON.parse(localStorage.getItem("likedGames")) || {};
    const bookmarks = Object.values(storedLikedGames);
    setGameArray(bookmarks);
  }, []);

  if (!gameArray || gameArray.length === 0) {
    return <p>No bookmarks available!</p>;
  }

  const handleViewDetail = (game) => {
    navigate(`/game-detail/${game.id}`, { state: { game } });
  };

  const handleNavigate = () => {
    navigate(`/`);
  };

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Game Details</h1>
        <button
          className="btn btn-primary rounded-pill px-4 py-1"
          onClick={handleNavigate}
        >
          Go Back
        </button>
      </div>
      {gameArray.map((game) => (
        <div
        key={game.id}
        className="bookmark-item d-flex flex-column flex-md-row justify-content-between bg-light shadow border rounded mb-4 p-3"
      >
        <div className="d-flex flex-column flex-md-row">
          <img
            src={game.background_image}
            alt={game.name}
            className="rounded shadow img-fluid mb-3 mb-md-0"
            style={{ maxWidth: "250px", height: "auto" }}
          />
          <div className="ms-md-3 d-flex flex-column justify-content-center">
            <h5 className="mb-2">🎮 <strong>{game.name}</strong></h5>
            <p className="mb-1">⭐ <strong>Rating:</strong> {game.rating}</p>
            <p className="mb-1">💬 <strong>Comments:</strong> {game.reviews_count}</p>
            <p className="mb-1">🔥 <strong>Suggestions:</strong> {game.suggestions_count}</p>
          </div>
        </div>
      
        <div className="d-flex flex-column justify-content-center mt-3 mt-md-0">
          <button
            className="btn btn-outline-danger w-100 mb-2"
            onClick={() => removeBookmark(game.id)}
          >
            Remove
          </button>
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => handleViewDetail(game)}
          >
            Game Detail
          </button>
        </div>
      </div>
      
      ))}
    </div>
  );
};

export default Bookmark;
