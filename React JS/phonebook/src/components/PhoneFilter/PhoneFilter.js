import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { contactFilter } from "../../redux/phoneActions";
import { getFlag } from "../../redux/phoneSelectors";
import css from "./PhoneFilter.module.css";
import popTransition from "../transitions/pop.module.css";

const PhoneFilter = ({ filterByName, visible }) => {
  const filterId = uuidv4();

  const getFilteredName = (e) => {
    const filter = e.target.value;

    filterByName(filter);
  };

  return (
    <CSSTransition
      in={visible}
      timeout={200}
      classNames={popTransition}
      unmountOnExit
    >
      <div className={css.filterConatainer}>
        <label className={css.label} htmlFor={filterId}>
          Find contacts by name
        </label>
        <input
          className={css.input}
          type="text"
          id={filterId}
          onChange={getFilteredName}
        />
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = (state) => ({
  visible: getFlag(state),
});

const mapDispatchToProps = {
  filterByName: contactFilter,
};

PhoneFilter.propTypes = {
  filterByName: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneFilter);
