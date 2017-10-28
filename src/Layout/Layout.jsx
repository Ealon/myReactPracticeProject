import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Routes/Home';
import Products from '../Routes/Products';
import CreateNewProduct from '../Routes/CreateNewProduct';
import Header from '../components/Header';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: null,
    };
  }

  // componentDidMount() {
  //   window.addEventListener('resize', () => {
  //     console.log('浏览器外宽：',window.outerWidth);
  //     console.log('浏览器内宽：',window.innerWidth);
  //   });
  // }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/new" component={CreateNewProduct} />
        </div>
      </Router>
    );
  }
}

export default Layout;
