import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section title="feedback">
    <h1>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Section;
