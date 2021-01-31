import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import css from './Reviews.module.css';
import reviewsTransition from '../transitions/reviews.module.css';

const Reviews = ({ arrayReviews }) => {
  return (
    <TransitionGroup>
      {arrayReviews.map(reviews => (
        <CSSTransition
          key={reviews.id}
          timeout={200}
          unmountOnExit
          classNames={reviewsTransition}
        >
          <li className={css.item}>
            <h5>Author: {reviews.author}</h5>
            <p>{reviews.content}</p>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Reviews;
