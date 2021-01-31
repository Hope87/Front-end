import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 15px;
`;

const StyledInput = styled.input`
  display: block;
  margin-bottom: 15px;
`;

const StyledButton = styled.button`
  width: 100px;
  cursor: pointer;

  :hover {
    background-color: yellowgreen;
    color: white;
  }
`;

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = shortid.generate();

  numberId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name
          <StyledInput
            type="text"
            name="name"
            value={name}
            id={this.nameId}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.numberId}>
          Number
          <StyledInput
            type="text"
            name="number"
            value={number}
            id={this.numberId}
            onChange={this.handleChange}
          />
        </label>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
