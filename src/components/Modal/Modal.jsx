import React from 'react';
import injectSheet from 'react-jss';
import TiTimes from 'react-icons/lib/ti/times';
import styles from './styles';

// eslint-disable-next-line
const Modal = (props) => (
  <div className={props.classes.modalContainer}>
    <div className={props.classes.imgContainer}>
      <img src={props.img} className={props.classes.img} alt="No Item Chosen" />
      <div className={props.classes.closeButton} onClick={props.closeModal} >
        <TiTimes /> close
      </div>
    </div>
  </div>
);

export default injectSheet(styles)(Modal);

