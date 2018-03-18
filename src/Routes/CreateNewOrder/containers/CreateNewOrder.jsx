import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import Select from 'react-select';
import ButtonLink from '../../../components/ButtonLink';
import Button from '../../../components/Button';
import CircleLoader from '../../../components/CircleLoader';
import { blue500 } from '../../../global/colors';
import { SERVER_PATH } from '../../../global/const';
import styles from './styles';
import '../../../../node_modules/react-select/dist/react-select.css';
import CartItem from './CartItem';
import CustomerInfo from './CustomerInfo';
import TextInput from '../../../containers/TextInput';

let options = [];

class CreateNewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      exchangeRate: 5,
      customers: [],
      selectedOption: null,
      reloadCart: false,
      selectedCustomer: null,
    };
  }

  reloadCart = () => {
    this.setState({
      reloadCart: !this.state.reloadCart,
    });
  }
  

  /* eslint-disable func-names */
  /* eslint-disable prefer-arrow-callback */
  componentWillMount() {
    const self = this;
    axios.get(`${SERVER_PATH}/customers`)
      .then(function (response) {
        console.log(response);
        if (response.data.status === 'success') {
          self.setState({ customers: response.data.customers });
          response.data.customers.map((customer) => {
            options.push({ value: customer._id, label: customer.chineseName });
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  /* eslint-enable */

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption);
    selectedOption === null ? 
      this.setState({selectedCustomer:null})
      :
      this.state.customers.map(customer => {
        if (customer._id === selectedOption.value) {
          this.setState({
            selectedCustomer: customer,
          });
        }  
      })
  }

  handleChange = name => val => {
    this.setState({
      [name]: val,
    });
  }
  
  postNewOrder = () => {
    //eslint-disable-next-line
    if (confirm('Are you sure you want to save this product into the database?')) {
      this.setState({ fetching: true });
      const cartItems = JSON.parse(localStorage.cartItems);
      const newOrderInfo = {
        customerInfo: this.state.selectedCustomer,
        cartItems,
        exchangeRate: this.state.exchangeRate,
      }

      console.warn('订单情况：', newOrderInfo);
      // axios.post(`${SERVER_PATH}/CreateNewOrder`,
      //   newOrderInfo
      // )
      // .then(function (response) {
      //   console.log(response);
      //   if (response.data.status === 'success') {
      //     self.setState({ fetching: false });
      //   }
      // })
      // .catch(function (error) {
      //   console.log(error);
      //   self.setState({ fetching: false });    
      // });
    } else {
      // alert('no');
    }
  }

  render() {
    const cartItems = JSON.parse(localStorage.cartItems);
    return (
      <div style={{ width: '90%', margin: '10px auto' }} >
        <div style={{ textAlign: 'center', padding: '10px 0' }} >
          <h3>Order Information</h3>
        </div>
        <h3>1. Select a customer</h3>
        <Select
          name="form-select-customer"
          placeholder="Select a customer"
          value={this.state.selectedOption}
          onChange={this.handleSelectChange}
          removeSelected={false}
          options={options}
        />
        {
          this.state.selectedCustomer &&
          <CustomerInfo
            name={ this.state.selectedCustomer.chineseName }
            phone={ this.state.selectedCustomer.phone }
            address={ this.state.selectedCustomer.address }
          />
        }
        <h3>2. Input the exchange rate</h3>
        <TextInput
          title="Exchange Rate"
          placeholder="Please input the exchange rate..."
          function={this.handleChange('exchangeRate')}
          defaultValue={this.state.exchangeRate}
        />
        {
          cartItems.map((itemID) => {
            return <CartItem id={itemID.id} key={itemID.id} exchangeRate={this.state.exchangeRate} reloadCart={this.reloadCart} />
          })
        }
        {
          this.state.fetching ?
            <div><CircleLoader size={24} color={blue500} /></div>
            : null
        }
        <div style={{ textAlign: 'center' }}>
          <Button func={this.postNewOrder}>create</Button>
          <ButtonLink link="/orders">cancel</ButtonLink>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CreateNewOrder);

