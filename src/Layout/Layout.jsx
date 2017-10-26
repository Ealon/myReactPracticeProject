import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from '../Routes/Home/Home';
import OtherPage from '../Routes/OtherPage/OtherPage';
import Header from '../components/Header';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: null,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/other" component={OtherPage} />
        </div>
      </Router>
    );
  }
}

export default Layout;
