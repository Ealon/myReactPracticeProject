import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import TextInput from '../../../containers/TextInput';
import ButtonLink from '../../../components/ButtonLink';
import Button from '../../../components/Button';
import CircleLoader from '../../../components/CircleLoader';
import { blue500 } from '../../../global/colors';
import { SERVER_PATH, PRODUCT_IMG_DIR } from '../../../global/const';
import styles from './styles';

class ProductDetail extends Component {
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
      fetchingComplete: false,
    };
  }

  componentWillMount() {
    this.postGetProduct();
  }
  

  handleChange = name => val => {
    this.setState({
      [name]: val,
    });
  }
  
  postUpdateProduct = () => {
    //eslint-disable-next-line
    if (confirm('Are you sure you want to UPDATE the product info?')) {
      this.setState({ fetching: true });
      const self = this;
      const updatedProductInfo = {
        productName: this.state.productName,
        chineseName: this.state.chineseName,
        pinyin: this.state.pinyin,
        price: this.state.price,
        supplier: this.state.supplier,
        url: this.state.url,
        id: this.props.match.params.id,
      }

      axios.post(`${SERVER_PATH}/updateProduct`,
        updatedProductInfo
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

  postDeleteProduct = () => {
    //eslint-disable-next-line
    if (confirm('Are you sure you want to DELETE the product info?')) {
      this.setState({ fetching: true });
      const self = this;
      const productInfo = {
        id: this.props.match.params.id,
      }

      axios.post(`${SERVER_PATH}/deleteProduct`,
        productInfo
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

  postGetProduct = () => {
    this.setState({ fetching: true });
    const self = this;
    const productInfo = {
      id: this.props.match.params.id,
    }

    axios.post(`${SERVER_PATH}/product`,
      productInfo
    )
    .then(function (response) {
      console.log(response);
      if (response.data.status === 'success') {
        self.setState({ 
          fetching: false,
          productName: response.data.productInfo.productName,
          chineseName: response.data.productInfo.chineseName,
          pinyin: response.data.productInfo.pinyin,
          price: response.data.productInfo.price,
          supplier: response.data.productInfo.supplier,
          url: response.data.productInfo.url,
          fetchingComplete: true,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      self.setState({ fetching: false });    
    });
  }

  render() {
    return (
      <div style={{ width: '80%', margin: '10px auto' }} >
        <div style={{ textAlign: 'center', padding: '10px 0 10px 0', borderBottom: '1px solid #ccc' }} >
          <div>Product Information</div>
          <img src={this.state.url} height={300} />
          <div>
            <span className={this.props.classes.deleteButton} onClick={this.postDeleteProduct}>
              <FaTrashO size={20} /> DELETE THIS ITEM
            </span>
          </div>
        </div>
        {
          this.state.fetchingComplete ?
            <div className={this.props.classes.flexParent} >
              <div className={this.props.classes.flexChild} >
                <TextInput
                  title="Product Name"
                  placeholder=""
                  function={this.handleChange('productName')}
                  defaultValue={this.state.productName}
                />
              </div>
              <div className={this.props.classes.flexChild} >
                <TextInput
                  title="Chinese Name"
                  placeholder=""
                  function={this.handleChange('chineseName')}
                  defaultValue={this.state.chineseName}
                />
              </div>
              <div className={this.props.classes.flexChild} >
                <TextInput
                  title="Pinyin"
                  placeholder="input something"
                  function={this.handleChange('pinyin')}
                  defaultValue={this.state.pinyin}
                />
              </div>
              <div className={this.props.classes.flexChild} >
                <TextInput
                  title="Price (AUD)"
                  placeholder="input something"
                  function={this.handleChange('price')}
                  defaultValue={this.state.price.toString()}
                />
              </div>
              <div className={this.props.classes.flexChild} >
                <TextInput
                  title="Supplier"
                  placeholder="input something"
                  function={this.handleChange('supplier')}
                  defaultValue={this.state.supplier}
                />
              </div>
              <div className={this.props.classes.flexChild} >
                <TextInput
                  title="Image URL"
                  placeholder="input something"
                  function={this.handleChange('url')}
                  defaultValue={this.state.url}
                />
              </div>
            </div>
            :
            null
        }
        {
          this.state.fetching ?
            <CircleLoader size={24} color={blue500} />
            : null
        }
        <div style={{ textAlign: 'center' }}>
          <Button func={this.postUpdateProduct}>update</Button>
          <ButtonLink link="/products">cancel</ButtonLink>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ProductDetail);

