import React, { Component } from 'react';
import TiEdit from 'react-icons/lib/ti/edit';
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './styles';
import { addItemToCart, isItemInCart } from '../../global/functions';
import checkMark from './check-mark.svg';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isItemInCart: false,
    };
  }

  componentWillMount() {
    this.setState({
      isItemInCart: isItemInCart(this.props.id),
    });
  }

  addToCart = () => {
    if(addItemToCart(this.props.id)) {
      this.setState({
        isItemInCart: true,
      });
    }
  }

  render() {
    return (
      <div className={this.props.classes.itemContainer}>
        <div className={this.props.classes.imgContainer}>
          <img
            alt="preview"
            src={this.props.url}
            className={this.props.classes.img}
            onClick={()=>this.props.openModal(this.props.url)}
          />
          <img src={checkMark} width="24" alt="in-cart" />
        </div>
        {/* <div className={this.props.classes.itemContainer}></div> */}
          <div className={this.props.classes.chineseName}>
            {this.props.chineseName}
          </div>
        <div className={this.props.classes.productName}>
          {this.props.productName}
        </div>
        <div>
          <span className={this.props.classes.cart}>
            <TiShoppingCart size={20} />
            {
              this.state.isItemInCart ?
                <span>REMOVE FROM CART</span>
                :
                <span onClick={this.addToCart}>ADD TO CART</span>
            }
          </span> | 
          <Link to={`/products/edit/${this.props.id}`} >
            <TiEdit size={20} /> EDIT
          </Link>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ProductItem);

