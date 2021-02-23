import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import fadeTransition from "../transitions/fade.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import css from "./PhoneList.module.css";

const PhoneList = ({ items = [], onDelete }) => (
  <TransitionGroup component="ul" className={css.phoneListContainer}>
    {items.map((item) => (
      <CSSTransition key={item.id} timeout={500} classNames={fadeTransition}>
        <li className={css.phoneListItems}>
          <p className={css.phoneListName}>{item.name}</p>
          <p className={css.phoneListNumber}>{item.number}</p>
          <a
            className={css.phoneListClose}
            href="#"
            onClick={() => onDelete(item.id)}
          >
            <FontAwesomeIcon icon={faTimesCircle} style={{ color: "red" }} />
          </a>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

PhoneList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()),
};

export default PhoneList;
