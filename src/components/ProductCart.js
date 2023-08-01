import React from 'react';

const ProductTile = ({ product }) => {
  
  const { image, name, description, price, discountPrice, rating } = product;

  
  const handleAddToCart = () => {
    alert('Product added to cart');
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center mb-2">
        {discountPrice ? (
          <div>
            <span className="text-lg font-bold text-red-600">${discountPrice}</span>
            <span className="line-through text-gray-500 ml-2">${price}</span>
          </div>
        ) : (
          <div className="text-lg font-bold">${price}</div>
        )}
        <div>
          {'★'.repeat(rating)}
          {'☆'.repeat(5 - rating)}
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductTile;
