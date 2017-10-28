import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Layout from './Layout/Layout';
import registerServiceWorker from './registerServiceWorker';

// ---------- Render Setup ----------
const MOUNT_NODE = document.getElementById('root');
const Layout = require('./Layout/Layout').default;

const render = () => {
  ReactDOM.render(
    <Layout />,
    MOUNT_NODE,
  );
};

render();
registerServiceWorker();
