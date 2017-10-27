import React, { Component } from 'react';
import ItemPreview from '../../components/ItemPreview';
import logo from '../../logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Hi, Ealon!</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <ItemPreview
          item_image="https://images6.moneysavingexpert.com/images/product-testing-02.png"
          item_name="some product"
        />
        <ItemPreview
          item_image="https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/IP7P128SG_iphone_7_plus_128gb_black.jpg"
          item_name="iPhone"
        />
      </div>
    );
  }
}

export default Home;
