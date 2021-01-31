import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import { searchMovie } from '../../services/tmdb-api';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    text: '',
  };

  componentDidMount() {
    const { location } = this.props;
    const { search } = location;

    if (search) {
      const searchString = queryString.parse(search).category;
      this.searchMovieFunc(searchString);
    }
  }

  handleChange = e => {
    const { value } = e.target;
    const { history } = this.props;

    this.setState({
      text: value,
    });

    history.push({
      pathname: this.props.location.pathname,
      search: `category=${value}`,
    });
  };

  searchMovieFunc = searchText => {
    const { text } = this.state;

    searchMovie(text || searchText).then(res =>
      this.setState({ movies: res.results }),
    );
  };

  render() {
    const { text, movies } = this.state;

    return (
      <div>
        <StyledInput type="text" value={text} onChange={this.handleChange} />
        <StyledButton type="button" onClick={this.searchMovieFunc}>
          Search
        </StyledButton>

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Styles
const StyledButton = styled.button`
  border: 1px solid black;
  padding: 0 5px;
  margin-left: 5px;
  line-height: 1.4;
`;

const StyledInput = styled.input`
  width: 250px;
`;
