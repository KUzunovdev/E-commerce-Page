import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';


const App = () => {

  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
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
      </div>
      <Footer />
    </div>
  </Router>
  );
};

export default App;