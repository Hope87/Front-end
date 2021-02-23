import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/posts/postOperations";

class PostEditor extends Component {
  state = { text: "", tag: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ text: "", tag: "" });
  };

  render() {
    const { text, tag } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          value={text}
          onChange={this.handleChange}
          cols="30"
          rows="5"
        ></textarea>
        <input
          type="text"
          name="tag"
          value={tag}
          onChange={this.handleChange}
        />
        <button type="submit">Add Post</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: addPost,
};

export default connect(null, mapDispatchToProps)(PostEditor);
