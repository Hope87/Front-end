import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const activeStyle = {
  color: 'blue',
};

const Nav = () => (
  <ul className={css.list}>
    <li className={css.item}>
      <NavLink
        to="/"
        exact
        activeStyle={activeStyle}
        style={{
          textDecoration: 'none',
          fontSize: '20px',
          color: 'black',
          fontWeight: 700,
        }}
      >
        Home
      </NavLink>
    </li>
    <li className={css.item}>
      <NavLink
        to="/movie"
        activeStyle={activeStyle}
        style={{
          textDecoration: 'none',
          fontSize: '20px',
          color: 'black',
          fontWeight: 700,
        }}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
