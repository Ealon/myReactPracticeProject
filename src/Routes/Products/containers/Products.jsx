import React from 'react';
import TextInput from '../../../containers/TextInput';

const Products = () => (
  <div style={{
    width: '90%', margin: '100px auto',
    }}
  >
    <TextInput
      title="Product Name"
      placeholder="input something"
    />
  </div>
);

export default Products;
