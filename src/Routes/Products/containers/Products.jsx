import React from 'react';
import ButtonLink from '../../../components/ButtonLink';
import Button from '../../../components/Button';

const Products = (props) => (
  <div style={{
    width: '90%', margin: '20px auto',
    }}
  >
    <div style={{ textAlign: 'right' }}>
      <ButtonLink link="/products/new">+ new product</ButtonLink>
    </div>
    <div style={{ textAlign: 'center', paddingTop: 50 }}>
      <div style={{ textAlign: 'center', padding: 50 }}>
        counter : {props.value ? props.value : 'NONE'}
      </div>
      <Button func={props.onIncrement}>increase</Button>
    </div>
  </div>
);

export default Products;
