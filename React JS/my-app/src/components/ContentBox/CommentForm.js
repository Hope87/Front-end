import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  font: inherit;
  padding: 8px;
  resize: none;
`;

export default class CommentForm extends Component {
  state = {
    text: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddComment(this.state.text);

    this.setState({ text: '' });
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      text: value,
    });
  };

  render() {
    const { text } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Textarea
          rows="5"
          value={text}
          onChange={this.handleChange}
          placeholder="Add comment..."
        />
        <button type="submit">Post</button>
      </Form>
    );
  }
}
