import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import styles from './styles';

export const ButtonLink = (props) => (
  <Link to={props.link} >
    <button className={props.classes.buttonLink} >
      {props.children}
    </button>
  </Link>
);

export default injectSheet(styles)(ButtonLink);

