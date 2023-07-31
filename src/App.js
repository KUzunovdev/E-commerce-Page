import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';
import products from './data/products.json';

const App = () => {

  const getProductByCategory = (category) =>{

    return products.filter(product => product.category === category);
  };

  return (
    <Router>
    <Header />
    <Routes>
      <Route
        path="/category/:category"
        element={(props) => {
          const category = props.match.params.category;
          const filteredProducts = getProductByCategory(category);
          return <ProductGrid products={filteredProducts} />;
        }}
      />
    </Routes>
  </Router>
  );
};

export default App;