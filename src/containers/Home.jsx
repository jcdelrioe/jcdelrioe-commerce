import React from 'react';
import Products from '../components/Products.jsx';
import initialState from '../InitialState.js';

const Home = () => {
  return (
    <Products products={initialState.products} />
  );
};

export default Home;
