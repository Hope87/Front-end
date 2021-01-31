import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Container = styled.div`
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

export default class App extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    const persistedComments = localStorage.getItem('comments');

    if (persistedComments) {
      this.setState({
        comments: JSON.parse(persistedComments),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { comments } = this.state;

    if (prevState.comments !== comments) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }

  addComment = text => {
    const comment = {
      id: uuidv4(),
      text,
      createdAt: new Date().toISOString(),
    };

    this.setState(state => ({
      comments: [...state.comments, comment],
    }));
  };

  render() {
    const { comments } = this.state;

    return (
      <Container>
        <CommentForm onAddComment={this.addComment} />
        <CommentList items={comments} />
      </Container>
    );
  }
}
