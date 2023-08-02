import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
        <Route
          path="/"
          element={<Navigate to="/category/bags" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;