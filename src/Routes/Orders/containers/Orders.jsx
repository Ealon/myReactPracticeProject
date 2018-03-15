import React, { Component } from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';
import ButtonLink from '../../../components/ButtonLink';
// import Button from '../../../components/Button';
// import Loader from '../../../components/Loader';
// import CircleLoader from '../../../components/CircleLoader';
import { SERVER_PATH } from '../../../global/const';
import styles from './styles';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fetching: false,
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

  render() {
    return (
      <div style={{ width: '90%', margin: '20px auto' }} >
        <div style={{ textAlign: 'right', paddingBottom: 40 }}>
          <ButtonLink link="/orders/new">+ new order</ButtonLink>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Orders);
