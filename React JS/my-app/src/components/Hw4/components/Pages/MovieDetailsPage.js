import React, { Component } from 'react';
import styled from 'styled-components';
import {
  fetchMovieId,
  featchMovieCast,
  featchMovieReviews,
} from '../../services/tmdb-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import Links from '../Links/Links';

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
  };

  id = this.props.match.params.id;

  componentDidMount() {
    fetchMovieId(this.id).then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push({
      pathname: '/',
    });
  };

  getCast = () => {
    const { movie } = this.state;

    featchMovieCast(movie.id).then(res =>
      this.setState({ cast: res.cast, reviews: [] }),
    );
  };

  getReviews = () => {
    const { movie } = this.state;

    featchMovieReviews(movie.id).then(res =>
      this.setState({ reviews: res.results, cast: [] }),
    );
  };

  render() {
    const { movie, cast, reviews } = this.state;

    const {
      title,
      popularity,
      release_date: release,
      overview,
      poster_path: posterPath,
      runtime,
      id,
    } = movie;

    const abbreviatedCast = cast.slice(0, 9);

    return (
      <>
        <StyledButton type="button" onClick={this.handleGoBack}>
          Go back
        </StyledButton>
        <StyledBox>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${posterPath}`}
              alt="title"
              width="240"
            />
          </div>
          <StyledItem>
            <h2>{title}</h2>
            <p>Popularity: {popularity}</p>
            <p>Release date: {release}</p>
            <p>Runtime: {runtime} min</p>
            <h3>Overview</h3>
            <p>{overview}</p>
          </StyledItem>
        </StyledBox>
        <Links
          onGetReviews={this.getReviews}
          onGetCast={this.getCast}
          id={id}
        />
        <Cast arrayCast={abbreviatedCast} />
        <Reviews arrayReviews={reviews} />
      </>
    );
  }
}

// Styles
const StyledBox = styled.div`
  display: flex;
`;

const StyledItem = styled.div`
  margin-left: 30px;
`;

const StyledButton = styled.button`
  margin-bottom: 10px;
  border: 1px solid black;
  color: blueviolet;
`;
