import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const ProductCart = ({ product }) => {
  const { image, name, description, price, discountedPrice, rating } = product;

  const handleAddToCart = () => {
    alert('Product added to cart');
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<StarIcon key={i} style={{ fontSize: 16 }} />);
    }
    if (rating % 1 !== 0) {
      stars.push(<StarHalfIcon key={Math.floor(rating)} style={{ fontSize: 16 }} />);
    }
    while (stars.length < 5) {
      stars.push(<StarOutlineIcon key={stars.length} style={{ fontSize: 16 }} />);
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col" style={{ height: '100%' }}>
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2" style={{ height: '3em', overflow: 'hidden' }}>
        {description}
      </p>
      <div className="flex justify-between items-center mb-2 mt-auto">
        {discountedPrice ? (
          <div>
            <span className="line-through text-gray-500 text-sm block">${price}</span>
            <span className="text-lg font-bold text-red-600">${discountedPrice}</span>
          </div>
        ) : (
          <div className="text-lg font-bold">${price}</div>
        )}
        {renderStars(rating)}
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCart;
