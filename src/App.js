import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/category/:category"
          element={<ProductGrid />}
        />
      </Routes>
    </Router>
  );
};

export default App;