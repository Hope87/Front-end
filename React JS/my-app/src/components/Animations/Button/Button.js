import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick = () => null }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
