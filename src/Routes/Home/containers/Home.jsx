import React, { Component } from 'react';
import ItemPreview from '../../../components/ItemPreview';
import Button from '../../../components/Button';
import Haha from '../components/Haha';

class Home extends Component {
  // componentWillMount() {
  //   // data definition
  //   const x = {
  //     name: 'x',
  //     prefer: ['a', 'b', 'c'],
  //     engaged: false,
  //     fiance: null,
  //   };
  //   const y = {
  //     name: 'y',
  //     prefer: ['b', 'a', 'c'],
  //     engaged: false,
  //     fiance: null,
  //   };
  //   const z = {
  //     name: 'z',
  //     prefer: ['a', 'b', 'c'],
  //     engaged: false,
  //     fiance: null,
  //   };

  //   const a = {
  //     name: 'a',
  //     prefer: ['y', 'x', 'z'],
  //     engaged: false,
  //     fiance: null,
  //   };
  //   const b = {
  //     name: 'b',
  //     prefer: ['x', 'y', 'z'],
  //     engaged: false,
  //     fiance: null,
  //   };
  //   const c = {
  //     name: 'c',
  //     prefer: ['x', 'y', 'z'],
  //     engaged: false,
  //     fiance: null,
  //   };

  //   // order definition
  //   const men = [x, y, z];
  //   const women = [a, b, c];

  //   console.log(men.indexOf('x'));

  //   this.menFirst(men);

  // }

  // menFirst = (men) => {
  //   men.map(man=>{
  //     console.log(man.prefer);
  //   })
  // }

  resetCart = () => {
    localStorage.setItem('cartItems', JSON.stringify([]));
    localStorage.setItem('orderItems', JSON.stringify([]));
  }

  render() {
    return (
      <div className="Home">
        <ItemPreview
          item_image="https://images6.moneysavingexpert.com/images/product-testing-02.png"
          item_name="some product"
        />
        <ItemPreview
          item_image="https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/IP7P128SG_iphone_7_plus_128gb_black.jpg"
          item_name="iPhone"
        />
        <Button func={this.resetCart}>RESET CART</Button>
        <Haha />
      </div>
    );
  }
}

export default Home;
