import React from 'react';
import ButtonLink from '../../../components/ButtonLink';

const Products = () => (
  <div style={{
    width: '90%', margin: '20px auto',
    }}
  >
    <div style={{ textAlign: 'right' }}>
      <ButtonLink link="/products/new">+ new product</ButtonLink>
    </div>
  </div>
);

export default Products;
