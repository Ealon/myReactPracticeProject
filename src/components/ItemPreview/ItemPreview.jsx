import React from 'react';
import injectSheet from 'react-jss';
import './ItemPreview.css';
import styles from './styles';

const ItemPreview = (props) => (
  <div style={{ padding: 20, display: 'table-cell' }}>
    <div className={props.classes.previewContainer}>
      <div className={props.classes.imageContainer}>
        <img src={props.item_image} className={props.classes.image} />    
      </div>
      <div className={props.classes.overlay}>
        <button className={props.classes.button}>VIEW DETAILS</button>
      </div>
      <div className={props.classes.previewName}>
        {props.item_name}
      </div>
    </div>
  </div>
);

export default injectSheet(styles)(ItemPreview);

