/* eslint-disable prettier/prettier */
import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'c88893c8204684b8505a7cce995a535d';

//Get popular movies

export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`);
  return resp?.data?.results;
};

//Get upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apiKey}`);
  return resp?.data?.results;
};
//Get upcoming TV
export const getPopularTV = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?api_key=${apiKey}`);
  return resp?.data?.results;
};

//Get Family movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10751`,
  );
  return resp?.data?.results;
};
//Get Music movies
export const getMusicMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10402`,
  );
  return resp?.data?.results;
};
