import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import ProductCart from "./ProductCart"

const ProductGrid = () => {
  const { category } = useParams();
  const filteredProducts = products.filter(product => product.category === category);

  const initialProductsToShow = 20;
  const [visibleProducts, setVisibleProducts] = React.useState(filteredProducts.slice(0, initialProductsToShow));

  const handleLoadMore = () => {
    const nextProducts = filteredProducts.slice(visibleProducts.length, visibleProducts.length + initialProductsToShow);
    setVisibleProducts([...visibleProducts, ...nextProducts]);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {visibleProducts.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts.length < filteredProducts.length && (
        <button onClick={handleLoadMore} className="bg-blue-500 text-white p-2 mt-4">
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductGrid;