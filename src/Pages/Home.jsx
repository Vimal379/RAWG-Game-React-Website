import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";
import Loader from "../Components/Loader"; // Import loader

const Home = () => {
  const [gameListData, setGameListData] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [randNum, setRandNum] = useState(0);
  const [titleName, setTitleName] = useState("Popular");
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    getAllGamesData();
    getGameListByGenresId(4);
  }, []);

  const getAllGamesData = async () => {
    await GlobalApi.getAllGames.then((res) => {
      generateRandomNumber();
      setGameListData(res.data.results);
      setLoading(false); // Stop loading after data is fetched
    });
  };

  function generateRandomNumber() {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      setRandNum(randomNumber);
    }, 4000);
  }

  const getGameListByGenresId = (id) => {
    setLoading(true);
    GlobalApi.getGameListByGenreId(id).then((res) => {
      setGameListByGenre(res.data.results);
      setLoading(false);
    });
  };

  const getGenreNameForTitle = (name) => {
    setTitleName(name);
  };

  return (
    <div className="row p-8 g-0 overflow-none">
      <div className="col-12 col-md-3 d-none d-md-block">
        <GenreList
          genreId={(genreId) => getGameListByGenresId(genreId)}
          genreName={(genreName) => getGenreNameForTitle(genreName)}
        />
      </div>
      <div className="col-12 col-md-9 bg-secondary border-left-3 border-info">
        {loading ? (
          <Loader />
        ) : gameListData?.length > 0 && gameListByGenre.length > 0 ? (
          <>
            <Banner gameBanner={gameListData[randNum]} />
            <TrendingGames gameList={gameListData} />
            <GamesByGenresId gameList={gameListByGenre} genreName={titleName} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
