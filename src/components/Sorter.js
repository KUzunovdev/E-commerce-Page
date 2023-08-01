const Sorter = ({ onSort }) => {
    const handleSortChange = (e) => {
      onSort(e.target.value);
    };
  
    return (
      <div className="container mx-auto mt-2 flex justify-end">
        <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
        <select id="sort" onChange={handleSortChange} className="border p-2 rounded">
          <option value="alpha-asc">Alphabetical a-z</option>
          <option value="alpha-desc">Alphabetical z-a</option>
          <option value="price-asc">Price ascending</option>
          <option value="price-desc">Price descending</option>
        </select>
      </div>
    );
  };
  
  export default Sorter;
  