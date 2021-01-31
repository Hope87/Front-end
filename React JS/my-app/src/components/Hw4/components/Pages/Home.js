import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchMovie } from '../../services/tmdb-api';

export default class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    fetchMovie().then(res => this.setState({ movies: res.results }));
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;

    return (
      <>
        <StyledTitle>Trending today</StyledTitle>
        <ol>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
                to={{
                  pathname: `movie/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ol>
      </>
    );
  }
}

// Styles
const StyledTitle = styled.h2`
  font-size: 24px;
  margin-left: 20px;
`;
