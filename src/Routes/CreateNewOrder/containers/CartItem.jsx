import React, { Component } from 'react';
import axios from 'axios';
import injectSheet from 'react-jss';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import TextInput from '../../../containers/TextInput';
import styles from './styles';
import { SERVER_PATH } from '../../../global/const';
import { updateCartItems, removeItemFromCart, returnItemInfoInCart } from '../../../global/functions';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chineseName: '',
      price: '',
      supplier: '',
      url: '',
      salePrice: '',
      quantity: 1,
    };
  }

  componentWillMount() {
    const { id, exchangeRate } = this.props;
    const self = this;    
    const itemInfo = returnItemInfoInCart(id)[0];
    if (itemInfo.chineseName) {
      this.setState({
        ...itemInfo,
      });
    } else {
      axios.post(
        `${SERVER_PATH}/product`,
        { id },
      )
        .then(function (response) {
          console.log(response);
          if (response.data.status === 'success') {
            self.setState({
              url: response.data.productInfo.url,
              chineseName: response.data.productInfo.chineseName,
              price: response.data.productInfo.price,
              salePrice: response.data.productInfo.price*exchangeRate+35,
              supplier: response.data.productInfo.supplier,
            });
            const itemInfo = {
              id,
              salePrice: response.data.productInfo.price*exchangeRate+35,
              ...response.data.productInfo,
            };
            updateCartItems(itemInfo);
          }
        })
        .catch(function (error) {
          console.log(error);
          // self.setState({ fetching: false });    
        });
    }
  }

  handleChange = name => val => {
    this.setState({
      [name]: val,
    });
  }

  onSaveItemInfoToOrder = () => {
    const itemInfo = {
      id: this.props.id,
      ...this.state,
    };
    console.log(itemInfo);
    if (updateCartItems(itemInfo)) {
      alert('sucess!');
    } else {
      alert('failed!')
    }
  }

  onRemoveItemInfo = () => {
    if (window.confirm(`Remove ${this.state.chineseName} ?`)) {
      const itemInfo = {
        id: this.props.id,
        ...this.state,
      };
      removeItemFromCart(itemInfo) ? this.props.reloadCart() : alert('删除失败');
    } else {
      
    }
  }

  render() {
    const { exchangeRate, id } = this.props;
    const { chineseName, price, supplier, url, salePrice, quantity } = this.state;
    const profit = (salePrice - price * exchangeRate) * quantity;
    const profitRate = ((salePrice/exchangeRate)/price*100).toFixed(2);
    return chineseName && (
      <div className={this.props.classes.flexParent} style={{ paddingTop: '30px', borderBottom: '1px solid #333' }} >
        <div className={this.props.classes.flexChild} >
          {/* <img src={url} alt="cart-item" className={this.props.classes.previewImg}/> */}
          <div style={{ backgroundImage: `url(${url})` }} className={this.props.classes.img}/>
          <p style={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: 1 }}>{ chineseName }</p>
        </div>
        <div className={this.props.classes.flexChild} >
          <TextInput
            title="Cost Price (AUD$)"
            placeholder="Cost price"
            function={this.handleChange('price')}
            defaultValue={price}
          />
          <TextInput
            title="Sale Price (CNY ¥)"
            placeholder="Sale price"
            function={this.handleChange('salePrice')}
            defaultValue={salePrice}
          />
        </div>
        <div className={this.props.classes.flexChild} >
          <TextInput
            title="Quantity"
            placeholder="Please input quantities"
            function={this.handleChange('quantity')}
            defaultValue={quantity}
          />
          <TextInput
            title="Supplier"
            placeholder="Please input a supplier"
            function={this.handleChange('supplier')}
            defaultValue={supplier}
          />
          <button onClick={this.onSaveItemInfoToOrder} className={this.props.classes.buttonSave} >
            <FaFloppyO size={20} /> SAVE
          </button>
          |
          <button onClick={this.onRemoveItemInfo} className={this.props.classes.buttonRemove} >
            <FaTrashO size={20} /> REMOVE
          </button>
        </div>
        <div className={this.props.classes.summary} >
          <h4>Profit (CNY ¥): { profit } </h4>
          <h4>Profit Rate: { profitRate }% </h4>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CartItem);

