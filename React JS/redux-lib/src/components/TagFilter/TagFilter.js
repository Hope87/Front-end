import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { getSelectedTag } from "../../redux/posts/postsSelectors";
import { changeTag } from "../../redux/posts/postsActions";

const options = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JavaScript", value: "javascript" },
  { label: "React.js", value: "react" },
];

const findOption = (value) => options.find((opt) => opt.value === value);

const TagFilter = ({ currentTag = null, onChangeTag = () => null }) => (
  <div style={{ width: 200 }}>
    <Select
      options={options}
      value={findOption(currentTag)}
      onChange={onChangeTag}
    />
  </div>
);

const mapStateToProps = (state) => ({
  currentTag: getSelectedTag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTag: (tag) => dispatch(changeTag(tag.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagFilter);
