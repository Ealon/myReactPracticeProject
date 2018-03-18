import React, { Component } from 'react';
import injectSheet from 'react-jss';
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import styles from './styles';
import { addItemToCart, isItemInCart, removeItemFromCart } from '../../../../global/functions';


class CartOption extends Component {
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
    // if (isItemInCart(this.props.id)) {
      console.log(this.props.id);
    // }
  }

  addToCart = () => {
    if(addItemToCart(this.props.id)) {
      this.setState({
        isItemInCart: true,
      });
    }
  }

  removeFromCart = () => {
    if(removeItemFromCart(this.props.id)) {
      this.setState({
        isItemInCart: false,
      });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.isItemInCart ?
            <button onClick={this.removeFromCart} className={this.props.classes.buttonRemove}><FaTrashO size={20} />REMOVE</button>
            :
            <button onClick={this.addToCart} className={this.props.classes.buttonAdd}><TiShoppingCart size={20} />ADD</button>
        }
      </div>
    );
  }
}

export default injectSheet(styles)(CartOption);

