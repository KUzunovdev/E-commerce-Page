import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import ProductCart from "./ProductCart";
import LoadMore from "./LoadMore";
import ProductCounter from './ProductCounter';
import Sorter from './Sorter';

const ProductGrid = () => {

  const { category } = useParams();
  const initialProductsToShow = 8;
  const totalProducts = products.filter(product => product.category === category).length;

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

  const handleSort = (sortOption) => {
    let sortedProducts;
    switch (sortOption) {
      case 'alpha-asc':
        sortedProducts = [...visibleProducts].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alpha-desc':
        sortedProducts = [...visibleProducts].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        sortedProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProducts = [...visibleProducts].sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = visibleProducts;
    }
    setVisibleProducts(sortedProducts);
  };

  return (
    <div className="container mx-auto mt-8">
       <Sorter onSort={handleSort} />
      <ProductCounter displayed={visibleProducts.length} total={totalProducts} />
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
