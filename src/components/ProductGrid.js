import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import ProductCart from "./ProductCart";
import LoadMore from "./LoadMore";
import ProductCounter from './ProductCounter';
import Sorter from './Sorter';
import Filter from "./Filter"
import CategorySection from "./CategorySection"
import FilterListIcon from '@mui/icons-material/FilterList';


const getFilteredProducts = (category, filters) => {
  let filteredProducts = products.filter(product => product.category === category);

  if (filters.rating.length > 0) {
    filteredProducts = filteredProducts.filter(product => filters.rating.includes(String(product.rating)));
  }

  filteredProducts = filteredProducts.filter(product => product.price <= filters.price);

  return filteredProducts;
};

const ProductGrid = () => {

  const { category } = useParams();
  const initialProductsToShow = 8;

  const [filters, setFilters] = useState({ rating: [], price: 1000 });
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  const descriptions = {
    bags: "Explore our collection of stylish and durable bags.",
    shoes: "Find the perfect pair of shoes for any occasion.",
    watches: "Choose from our exclusive range of elegant watches.",
    hats: "Discover the latest trends in hats and accessories.",
  };
  const categoryDescription = descriptions[category];

  
  useEffect(() => {
    const filteredProducts = getFilteredProducts(category, filters);
    setTotalProducts(filteredProducts.length);
    setVisibleProducts(filteredProducts.slice(0, initialProductsToShow));
  }, [category, filters]);

  const handleLoadMore = () => {
    const nextProducts = getFilteredProducts(category, filters)
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

  const handleFilterChange = (filter) => {
    setFilters(filter);
  };  

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="container mx-auto mt-8">
  <CategorySection categoryName={category} categoryDescription={categoryDescription} />
  <div className="flex flex-row"> {/* Changed to flex-row */}
    <div className="flex flex-col items-start mb-4 sm:mb-0 sm:mr-4">
      <button onClick={toggleFilter}>
        <div className="flex flex-col items-center">
          <FilterListIcon />
          <span className="text-sm">Filter</span>
        </div>
      </button>
      {showFilter && <Filter onFilterChange={handleFilterChange} />}
    </div>
    <div className="flex-1">
      <Sorter onSort={handleSort} />
      <ProductCounter displayed={visibleProducts.length} total={totalProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2">
        {visibleProducts.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts.length < totalProducts && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </div>
  </div>
</div>


  );
  
  
};

export default ProductGrid;
