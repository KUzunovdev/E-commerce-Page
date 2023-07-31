import React from 'react'
import ProductCart from "./ProductCart"

const ProductGrid = ({ products }) => {
 
  const initialProductsToShow = 20;
  const [visibleProducts, setVisibleProducts] = React.useState(products.slice(0, initialProductsToShow));

  
  const handleLoadMore = () => {
    const nextProducts = products.slice(visibleProducts.length, visibleProducts.length + initialProductsToShow);
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
        <button onClick={handleLoadMore} className="bg-blue-500 text-white p-2 mt-4">
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductGrid;