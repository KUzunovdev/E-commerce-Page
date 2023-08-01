import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import ProductCart from "./ProductCart";
import LoadMore from "./LoadMore";

const ProductGrid = () => {
  const { category } = useParams();
  const initialProductsToShow = 8;

  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(product => product.category === category);
    setVisibleProducts(filteredProducts.slice(0, initialProductsToShow));
  }, [category]);

  const handleLoadMore = () => {
    const nextProducts = products.filter(product => product.category === category)
      .slice(visibleProducts.length, visibleProducts.length + initialProductsToShow);
    setVisibleProducts([...visibleProducts, ...nextProducts]);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {visibleProducts.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts.length < products.length && (
       <LoadMore onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default ProductGrid;
