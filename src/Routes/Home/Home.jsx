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
      </div>
    );
  }
}

export default Home;
