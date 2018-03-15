import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Routes/Home';
import Products from '../Routes/Products';
import Orders from '../Routes/Orders';
import Customers from '../Routes/Customers';
import CreateNewProduct from '../Routes/CreateNewProduct';
import CreateNewCustomer from '../Routes/CreateNewCustomer';
import CreateNewOrder from '../Routes/CreateNewOrder';
import ProductDetail from '../Routes/ProductDetail';
// import Header from '../components/Header';
import Header2 from '../components/Header2';
// import { smallScreen } from '../global/screenSize';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smallScreen: false,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Header2 />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/customers" component={Customers} />
          <Route path="/products/new" component={CreateNewProduct} />
          <Route path="/customers/new" component={CreateNewCustomer} />
          <Route path="/orders/new" component={CreateNewOrder} />
          <Route path="/products/edit/:id" component={ProductDetail} />
        </div>
      </Router>
    );
  }
}

export default Layout;
