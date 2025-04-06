import axios from "axios";
const key = "4f83572eda604de684936777b958579d";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId
};
