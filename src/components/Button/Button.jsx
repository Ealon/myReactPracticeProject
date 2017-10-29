import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

export const Button = (props) => (
  <button className={props.classes.button} onClick={props.func}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Button);

