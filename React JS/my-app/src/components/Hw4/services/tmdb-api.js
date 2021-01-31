import axios from 'axios';
import PropTypes from 'prop-types';

const MY_API_KEY = '2bf596e4b3cf72bf68acb0e5a1da2c6e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovie = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${MY_API_KEY}`);

  const result = response.data;

  return result;
};

export const fetchMovieId = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${MY_API_KEY}`);

  const result = response.data;

  return result;
};

export const searchMovie = async text => {
  const response = await axios.get(
    `/search/movie?query=${text}&api_key=${MY_API_KEY}`,
  );

  const result = response.data;

  return result;
};

export const featchMovieCast = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${MY_API_KEY}`,
  );

  const result = response.data;

  return result;
};

export const featchMovieReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${MY_API_KEY}`,
  );

  const result = response.data;

  return result;
};

// PropTypes

fetchMovieId.propTypes = {
  id: PropTypes.number.isRequired,
};

searchMovie.propTypes = {
  text: PropTypes.string.isRequired,
};

featchMovieCast.propTypes = {
  id: PropTypes.number.isRequired,
};

featchMovieReviews.propTypes = {
  id: PropTypes.number.isRequired,
};
