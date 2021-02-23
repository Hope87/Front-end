import { connect } from "react-redux";
import PostList from "./PostList";
import { getPostsWithSelectedTag } from "../../redux/posts/postsSelectors";
import { deletePost } from "../../redux/posts/postOperations";

const mapStateToProps = (state) => ({
  items: getPostsWithSelectedTag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeletePost: (id) => dispatch(deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
