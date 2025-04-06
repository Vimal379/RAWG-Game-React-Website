import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../Styles/GamesByGenresId.css';

const GamesByGenresId = ({ gameList, genreName }) => {
  const navigate = useNavigate();
  const [likedGames, setLikedGames] = useState(
    JSON.parse(localStorage.getItem("likedGames")) || {}
  );

  const toggleHeart = (game) => {
    setLikedGames((prev) => {
      const updatedLikedGames = { ...prev };
      if (updatedLikedGames[game.id]) {
        delete updatedLikedGames[game.id]; // Remove from liked games
      } else {
        updatedLikedGames[game.id] = game; // Add to liked games
      }
      localStorage.setItem("likedGames", JSON.stringify(updatedLikedGames)); // Update local storage
      return updatedLikedGames;
    });
  };

  const handleViewDetail = (game) => {
    navigate(`/game-detail/${game.id}`, { state: { game } });
  };

  
  return (
    <div className="mt-5">
      <h2 className="fw-bold fs-2 text-light ps-4">{genreName} Games</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 mt-4">
        {gameList.map((item) => (
          <div
            key={item.id}
            className="col pb-3 bg-light p-3 mb-4 m-auto rounded game-card"
            style={{
              height: '340px',
              width: '340px',
            }}
          >
            <img
              src={item.background_image}
              alt={item.name}
              className="img-fluid object-cover rounded-3 game-image"
              style={{
                height: '230px',
                width: '350px',
              }}
            />
            <div className="d-flex justify-content-between">
              <h2 className="fs-5 fw-bold mt-2">
                {item.name.length > 20 ? item.name.slice(0, 21) : item.name}{' '}
                <span className="badge bg-success">{item.metacritic}</span>{' '}
              </h2>
              {likedGames[item.id] ? (
                <i
                  className="bi bi-heart-fill text-danger fs-4 mt-1 me-1"
                  onClick={() => toggleHeart(item)}
                ></i>
              ) : (
                <i
                  className="bi bi-heart fs-4 mt-1 me-1"
                  onClick={() => toggleHeart(item)}
                ></i>
              )}
            </div>

            <div className="fs-5 d-flex justify-content-between">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}{' '}
              <button
                className="fs-5 ms-3 bg-primary text-light rounded outline-none border-0"
                onClick={() => handleViewDetail(item)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
        
      
    </div>
  );
};

export default GamesByGenresId;
