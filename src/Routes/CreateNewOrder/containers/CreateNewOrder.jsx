import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import Select from 'react-select';
import TextInput from '../../../containers/TextInput';
import ButtonLink from '../../../components/ButtonLink';
import Button from '../../../components/Button';
import CircleLoader from '../../../components/CircleLoader';
import { blue500 } from '../../../global/colors';
import { SERVER_PATH, PRODUCT_IMG_DIR } from '../../../global/const';
import styles from './styles';
import '../../../../node_modules/react-select/dist/react-select.css';

class CreateNewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      productName: '',
      chineseName: '',
      pinyin: '',
      price: '',
      supplier: '',
      url: '',
      products: [],
      selectedOption: [],
    };
  }

  /* eslint-disable func-names */
  /* eslint-disable prefer-arrow-callback */
  componentWillMount() {
    const self = this;
    axios.get(`${SERVER_PATH}/products`)
      .then(function (response) {
        console.log(response);
        if (response.data.status === 'success') {
          self.setState({ products: response.data.products });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  /* eslint-enable */

  handleChange = name => val => {
    this.setState({
      [name]: val,
    });
  }

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption);
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
    let options = [];
    this.state.products.map(product => {
      options.push({ value: product._id, label: product.chineseName });
    })
    return (
      <div style={{ width: '90%', margin: '10px auto' }} >
        <div style={{ textAlign: 'center', padding: '10px 0 10px 0' }} >
          Product Information
        </div>
        <Select
          name="form-select-products"
          placeholder="Select Products"
          value={this.state.selectedOption}
          onChange={this.handleSelectChange}
          multi
          removeSelected={false}
          options={options}
        />
        <div className={this.props.classes.flexParent} >
          <div className={this.props.classes.flexChild} >  
            <TextInput
              title="Product Name"
              placeholder="input something"
              function={this.handleChange('productName')}
            />
          </div>
          <div className={this.props.classes.flexChild} >
            <TextInput
              title="Chinese Name"
              placeholder=""
              function={this.handleChange('chineseName')}
            />
          </div>
          <div className={this.props.classes.flexChild} >
            <TextInput
              title="Pinyin"
              placeholder="input something"
              function={this.handleChange('pinyin')}
              />
          </div>
          <div className={this.props.classes.flexChild} >
            <TextInput
              title="Price (AUD)"
              placeholder="input something"
              function={this.handleChange('price')}
              />
          </div>
          <div className={this.props.classes.flexChild} >
            <TextInput
              title="Supplier"
              placeholder="input something"
              function={this.handleChange('supplier')}
            />
          </div>
          <div className={this.props.classes.flexChild} >
            <TextInput
              title="Image URL"
              placeholder="input something"
              function={this.handleChange('url')}
            />
          </div>
        </div>
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

