import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Style.module.css';

const activeStyle = {
  color: 'rgb(228, 112, 112)',
};

const Navigation = () => (
  <>
    <ul>
      <li>
        <NavLink
          className={Style.menuText}
          to="/"
          exact
          activeStyle={activeStyle}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={Style.menuText}
          to="/pets"
          activeStyle={activeStyle}
        >
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink
          className={Style.menuText}
          to="/about"
          activeStyle={activeStyle}
        >
          About
        </NavLink>
      </li>
    </ul>
  </>
);

export default Navigation;
