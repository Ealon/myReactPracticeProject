import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import TextInput from '../../../containers/TextInput';
import ButtonLink from '../../../components/ButtonLink';
import Button from '../../../components/Button';
import CircleLoader from '../../../components/CircleLoader';
import { blue500 } from '../../../global/colors';
import { SERVER_PATH, PRODUCT_IMG_DIR } from '../../../global/const';
import styles from './styles';

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
    };
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
    return (
      <div style={{
        width: '80%', margin: '50px auto',
        }}
      >
        <div style={{ textAlign: 'center', padding: '10px 0 50px 0' }} >
          Product Information
        </div>
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
          <ButtonLink link="/products">cancel</ButtonLink>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(CreateNewOrder);

