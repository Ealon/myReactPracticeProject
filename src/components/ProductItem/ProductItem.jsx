import React, { Component } from 'react';
import TiEdit from 'react-icons/lib/ti/edit';
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './styles';
import { addItemToCart, isItemInCart, removeItemFromCart } from '../../global/functions';
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
    const itemInfo = {
      id: this.props.id,
    };

    if(addItemToCart(itemInfo)) {
      this.setState({
        isItemInCart: true,
      });
    }
  }

  removeFromCart = () => {
    const itemInfo = {
      id: this.props.id,
    };

    if(removeItemFromCart(itemInfo)) {
      this.setState({
        isItemInCart: false,
      });
    }
  }

  render() {
    return (
      <div className={this.props.classes.itemContainer}>
        <div className={this.props.classes.imgContainer}>
          {/* <img
            alt="preview"
            src={this.props.url}
            className={this.props.classes.img}
            onClick={()=>this.props.openModal(this.props.url)}
          /> */}
          <div style={{ backgroundImage: `url(${this.props.url})` }} className={this.props.classes.previewImg}/>
        </div>
        {
          this.state.isItemInCart ?
          <div className={this.props.classes.checkMarkContainer}>
            <img src={checkMark} width="24" alt="in-cart"/>
          </div>
          : null
        }
        <div className={this.props.classes.chineseName}>
          {this.props.chineseName} | 
          <Link to={`/products/edit/${this.props.id}`} >
            <TiEdit size={20} />
          </Link>
        </div>
        <div className={this.props.classes.productName}>
          {this.props.productName}
        </div>
        <div>
            {
              this.state.isItemInCart ?
                <button onClick={this.removeFromCart} className={this.props.classes.buttonRemove}><FaTrashO size={20} />REMOVE</button>
                :
                <button onClick={this.addToCart} className={this.props.classes.buttonAdd}><TiShoppingCart size={20} />ADD</button>
            }
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ProductItem);

