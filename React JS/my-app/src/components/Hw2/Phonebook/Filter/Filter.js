import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-weight: 400;
  font-size: 18px;
`;

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <StyledTitle>Find contacts by name</StyledTitle>
    <input value={value} onChange={onChangeFilter} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
