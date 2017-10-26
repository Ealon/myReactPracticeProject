import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Header.css';

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

export const Header = () => (
  <nav className="header">
    <span className="header_logo">- Aussie Go -</span>
    <MenuLink activeOnlyWhenExact to="/" label="HOME" />
    <MenuLink to="/products" label="PRODUCTS" />
    <MenuLink to="/orders" label="ORDERS" />
    <MenuLink to="/users" label="USERS" />
    <Link to="/other" className="right">
      LOGIN
    </Link>
  </nav>
);

export default Header;

