import React from 'react';
import PropTypes from 'prop-types';

const style = { color: '#ff0000', display: 'block' };

const ErrorNotification = ({ label }) => {
  return <span style={style}>{label}</span>;
};

ErrorNotification.defaultProps = {
  label: '',
};

ErrorNotification.propTypes = {
  label: PropTypes.string,
};

export default ErrorNotification;
