import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import Select from 'react-select';
import ButtonLink from '../../../components/ButtonLink';
import Button from '../../../components/Button';
import CircleLoader from '../../../components/CircleLoader';
import { blue500 } from '../../../global/colors';
import { SERVER_PATH, PRODUCT_IMG_DIR } from '../../../global/const';
import styles from './styles';
import '../../../../node_modules/react-select/dist/react-select.css';
import CartItem from './CartItem';
import CustomerInfo from './CustomerInfo';
import TextInput from '../../../containers/TextInput';

class CreateNewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      exchangeRate: 5,
      customers: [],
      selectedOption: null,
    };
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
  }

  handleChange = name => val => {
    this.setState({
      [name]: val,
    });
  }
  
  postNewProduct = () => {
    //eslint-disable-next-line
    if (confirm('Are you sure you want to save this product into the database?')) {
      this.setState({ fetching: true });
      const self = this;
      const newProductInfo = {
        productName: this.state.productName,
        chineseName: this.state.chineseName,
        pinyin: this.state.pinyin,
        price: this.state.price,
        supplier: this.state.supplier,
        url: PRODUCT_IMG_DIR + this.state.url,
      }

      axios.post(`${SERVER_PATH}/CreateNewOrder`,
        newProductInfo
      )
      .then(function (response) {
        console.log(response);
        if (response.data.status === 'success') {
          self.setState({ fetching: false });
        }
      })
      .catch(function (error) {
        console.log(error);
        self.setState({ fetching: false });    
      });
    } else {
      // alert('no');
    }
  }

  render() {
    const options = [];
    let selectedCustomer = null;
    this.state.customers.map((customer) => {
      options.push({ value: customer._id, label: customer.chineseName });
      if (this.state.selectedOption && this.state.selectedOption.label === customer.chineseName) {
        selectedCustomer = customer;
      }
    });
    const cartItems = JSON.parse(localStorage.cartItems);
    console.log(selectedCustomer);
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
        <h3>2. Input the exchange rate</h3>
        <TextInput
          title="Exchange Rate"
          placeholder="Please input the exchange rate..."
          function={this.handleChange('exchangeRate')}
          defaultValue={this.state.exchangeRate}
        />
        {
          selectedCustomer &&
          <CustomerInfo
            name={ selectedCustomer.chineseName }
            phone={ selectedCustomer.phone }
            address={ selectedCustomer.address }
          />
        }
        {
          cartItems.map((itemID) => {
            return <CartItem id={itemID} key={itemID} exchangeRate={this.state.exchangeRate} />
          })
        }
        {
          this.state.fetching ?
            <CircleLoader size={24} color={blue500} />
            : null
        }
        <div style={{ textAlign: 'center' }}>
          <Button func={this.postNewProduct}>create</Button>
          <ButtonLink link="/orders">cancel</ButtonLink>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CreateNewOrder);

