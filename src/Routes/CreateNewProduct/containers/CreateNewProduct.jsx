import React from 'react';
import TextInput from '../../../containers/TextInput';
import ButtonLink from '../../../components/ButtonLink';

const CreateNewProduct = () => (
  <div style={{
    width: '80%', margin: '100px auto',
    }}
  >
    <div style={{ display: 'flex', margin: '0 auto' }}>
      <div style={{ flex: '1' }}>
        <TextInput
          title="Product Name"
          placeholder="input something"
        />
      </div>
      <div style={{ flex: '1' }}>
        <TextInput
          title="Product Name"
          placeholder="input something"
        />
      </div>
      <div style={{ flex: '1' }}>
        <TextInput
          title="Product Name"
          placeholder="input something"
        />
      </div>
    </div>
    
    <div style={{ textAlign: 'center' }}>
      <ButtonLink link="/products">back to products</ButtonLink>
    </div>
  </div>
);

export default CreateNewProduct;
