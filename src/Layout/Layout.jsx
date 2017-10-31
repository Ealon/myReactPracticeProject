import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Routes/Home';
import Products from '../Routes/Products';
import CreateNewProduct from '../Routes/CreateNewProduct';
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
          <Route path="/products/new" component={CreateNewProduct} />
        </div>
      </Router>
    );
  }
}

export default Layout;
