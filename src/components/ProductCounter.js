const ProductCounter = ({ displayed, total }) => {
    return (
      <div className="container mx-auto mt-2 text-gray-600">
        {displayed} out of {total} products shown
      </div>
    );
  };
  
  export default ProductCounter;
  