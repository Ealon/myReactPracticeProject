import React from 'react';
import TiEdit from 'react-icons/lib/ti/edit';
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './styles';

// eslint-disable-next-line
const ProductItem = (props) => (
  <div className={props.classes.itemContainer}>
    <div className={props.classes.imgContainer}>
      <img src={props.url} className={props.classes.img} onClick={()=>props.openModal(props.url)} />
    </div>
    {/* <div className={props.classes.itemContainer}></div> */}
      <div className={props.classes.chineseName}>
        {props.chineseName}
      </div>
    <div className={props.classes.productName}>
      {props.productName}
    </div>
    <div>
      <span className={props.classes.cart}>
        <TiShoppingCart size={20} />ADD TO CART
      </span> | 
      <Link to={`/products/edit/${props.id}`} >
        <TiEdit size={20} /> EDIT
      </Link>
    </div>
  </div>
);

export default injectSheet(styles)(ProductItem);

