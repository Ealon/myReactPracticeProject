import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';
import ButtonLink from '../../../components/ButtonLink';
import ProductItem from '../../../components/ProductItem';
import Modal from '../../../components/Modal';
import CartOption from '../containers/CartOption';
// import Button from '../../../components/Button';
// import Loader from '../../../components/Loader';
// import CircleLoader from '../../../components/CircleLoader';
import { SERVER_PATH } from '../../../global/const';
import styles from './styles';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fetching: false,
      products: [],
      showModal: false,
      modalImage: '',
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

  openModal = (img) => {
    this.setState({
      modalImage: img,
      showModal: true,
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <div style={{ width: '90%', margin: '20px auto' }} >
        <div style={{ textAlign: 'right', paddingBottom: 20 }}>
          <ButtonLink link="/products/new">+ new product</ButtonLink>
        </div>
        {
          this.state.products &&
          <ReactTable
            data={this.state.products}
            noDataText="Oops! No matching data found."
            columns={[
              {
                sortable: false,
                maxWidth: 120,
                maxHeight: 80,
                style: { paddingLeft: '1em' },
                filterable: false,
                Cell: row => (
                  <img alt="preview" src={row.original.url} style={{ width: '90%', height: '90%' }}/>
                ),
              },
              {
                Header: 'Name',
                accessor: 'chineseName',
                maxWidth: 200,
                style: { paddingLeft: '1em' },
                Cell: row => (
                  // eslint-disable-next-line
                  <Link to={`/products/edit/${row.original._id}`}>
                    {row.original.chineseName}
                  </Link>
                ),
              },
              {
                Header: 'English Name',
                accessor: 'productName',
                maxWidth: 250,
                style: { paddingLeft: '1em' },
              },
              {
                Header: 'Pinyin',
                accessor: 'pinyin',
                maxWidth: 200,
                style: { paddingLeft: '1em' },
              },
              {
                Header: 'Cart Option',
                // maxWidth: 120,
                style: { paddingLeft: '1em' },
                filterable: false,
                Cell: row => (
                  <CartOption id={row.original._id} />
                ),
              },
            ]}
            defaultPageSize={5}
            className="-striped -highlight"
            filterable
            showPageSizeOptions={false}
          />
        }
        <div className={this.props.classes.flexParent}>
          {
            this.state.products ?
            // eslint-disable-next-line
              this.state.products.map(product => {
                return (
                  <div key={product._id} className={this.props.classes.flexChild} >
                    <ProductItem
                      productName={product.productName}
                      chineseName={product.chineseName}
                      url={product.url}
                      id={product._id}
                      openModal={this.openModal}
                    />
                  </div>
                );
              })
              : null
          }
        </div>
        {this.state.showModal && <Modal img={this.state.modalImage} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default injectSheet(styles)(Products);
