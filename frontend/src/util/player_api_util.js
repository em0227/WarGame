import axios from "axios";
export const getLifetimeWins = () => axios.get(`/api/players/`);
export const updateLifetimeWins = (playerID) =>
  axios.patch(`/api/players/`, playerID);
