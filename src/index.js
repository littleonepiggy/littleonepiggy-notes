import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Layout from './components/layout/layout'
import Home from './components/screens/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
        <Home />
    </Layout>
  </React.StrictMode>
);
