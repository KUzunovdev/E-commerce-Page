import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [selectedRating, setSelectedRating] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);

  const handleRatingChange = (event) => {
    const value = event.target.value;
    setSelectedRating(prevSelectedRating =>
      prevSelectedRating.includes(value) ? prevSelectedRating.filter(r => r !== value) : [...prevSelectedRating, value]
    );
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleApplyFilters = () => {
    onFilterChange({ rating: selectedRating, price: priceRange });
  };

  return (
    <div className="p-4 border-r">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <div className="mb-4">
        <h4 className="font-semibold mb-1">Rating:</h4>
        {['5', '4', '3'].map(star => (
          <label key={star} className="block mb-1"> {/* added block styling */}
            <input type="checkbox" value={star} onChange={handleRatingChange} /> {star} Stars & Above
          </label>
        ))}
      </div>
      <div>
        <h4 className="font-semibold mb-1">Price:</h4>
        <input type="range" min="0" max="1000" step="10" value={priceRange} onChange={handlePriceChange} />
        <span>{priceRange}</span>
      </div>
      <button onClick={handleApplyFilters} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"> {/* added styling */}
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;

