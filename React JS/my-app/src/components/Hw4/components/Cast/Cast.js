import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import css from './Cast.module.css';
import photoTransition from '../transitions/photo.module.css';

const Cast = ({ arrayCast }) => {
  return (
    <TransitionGroup component="ul" className={css.list}>
      {arrayCast.map(cast => (
        <CSSTransition
          key={cast.id}
          timeout={200}
          unmountOnExit
          classNames={photoTransition}
        >
          <li className={css.item}>
            <img
              width="80"
              src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
              alt="not found"
            />
            <p>{cast.name}</p>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

Cast.propTypes = {
  arrayCast: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Cast;
