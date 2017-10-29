import React from 'react';
import { createStore } from 'redux';
import Products from './containers/Products';
import reducer from './modules/products';

const initialState = 65;
const store = createStore(reducer, initialState);

const ProductsWithReduxStore = () => {
  return (
    <Products
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'COUNTER_INCREMENT', payload: 1 })} // action 直接写在了这里
    />
  );
};

export default ProductsWithReduxStore;

