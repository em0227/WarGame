import axios from "axios";
export const startGame = () => axios.post(`/api/games/`);
export const updateGame = (gameID) => axios.patch(`/api/games/`, gameID);
