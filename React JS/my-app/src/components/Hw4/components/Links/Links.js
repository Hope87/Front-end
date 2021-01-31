import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Links.module.css';

const Links = ({ onGetReviews, onGetCast, id }) => (
  <div className={css.box}>
    <h3 className={css.title}>Additional information</h3>
    <Link
      to={`/movie/${id}/cast`}
      onClick={onGetCast}
      style={{
        marginLeft: '15px',
        marginTop: '5px',
        textDecoration: 'none',
        color: 'black',
      }}
    >
      Cast
    </Link>

    <Link
      to={`/movie/${id}/reviews`}
      onClick={onGetReviews}
      style={{ marginLeft: '15px', textDecoration: 'none', color: 'black' }}
    >
      Reviews
    </Link>
  </div>
);

Links.defaultProps = {
  id: null,
};

Links.propTypes = {
  onGetReviews: PropTypes.func.isRequired,
  onGetCast: PropTypes.func.isRequired,
  id: PropTypes.number,
};

export default Links;
