import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUl = styled.ul`
  width: 360px;
  padding-left: 0;
`;

const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  margin-left: 10px;
  background-color: white;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Contacts = ({ options, onRemoveContact }) => (
  <>
    <StyledUl>
      {options.map(option => (
        <StyledLi key={option.id}>
          {option.name}: {option.number}
          {
            <StyledButton
              type="button"
              onClick={() => onRemoveContact(option.id)}
            >
              Delete
            </StyledButton>
          }
        </StyledLi>
      ))}
    </StyledUl>
  </>
);

Contacts.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Contacts;
