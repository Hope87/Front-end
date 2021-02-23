import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/posts/postOperations";
import Timer from "./Timer/TimerContainer";
import StepSelector from "./StepSelector/StepSelectorContainer";
import PostList from "./PostList/PostListContainer";
import TagFilter from "./TagFilter/TagFilter";
import PostEditor from "./PostEditor/PostEditor";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div style={containerStyle}>
        <Timer />
        <StepSelector />
        <PostEditor />
        <TagFilter />
        <PostList />
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchPosts: (posts) => dispatch(fetchPosts(posts)),
// });

// Второй вариант записи
const mDTP = {
  fetchPosts,
};

export default connect(null, mDTP)(App);
