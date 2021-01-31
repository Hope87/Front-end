import React, { Component } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    font: 'inherit',
    padding: 8,
  },
};

export default class Editor extends Component {
  state = {
    text: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddMessage(this.state.text);

    this.setState({ text: '' });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Start typing message..."
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
