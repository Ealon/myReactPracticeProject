import React from 'react';
import { Route, Link } from 'react-router-dom';
import injectSheet from 'react-jss';
// import './Header.css';
import styles from './styles';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Link to={to} className={match ? 'route--active' : ''} >
        {label}
      </Link>
    )}
  />
);

export const Header = (props) => (
  <nav className={props.classes.header}>
    <MenuLink activeOnlyWhenExact to="/" label="HOME" />
    <MenuLink to="/products" label="PRODUCTS" />
    <MenuLink to="/orders" label="ORDERS" />
    <MenuLink to="/users" label="users" />
  </nav>
);

export default injectSheet(styles)(Header);
