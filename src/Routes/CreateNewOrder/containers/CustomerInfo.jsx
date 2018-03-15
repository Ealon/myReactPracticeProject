import React from 'react';

const CustomerInfo = ({ name, phone, address }) => {
  return (
    <div style={{ borderBottom: name ? '1px solid #333' : 'none' }}>
      <h4>{name}</h4>
      <h4>{phone}</h4>
      <h4>{address}</h4>
    </div>
  );
};

export default CustomerInfo;
