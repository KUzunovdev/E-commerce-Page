const CategorySection = ({ categoryName, categoryDescription }) => {
  return (
    <section className="my-10 py-6 px-4 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold capitalize mb-2">{categoryName}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{categoryDescription}</p>
    </section>
  );
};

export default CategorySection;
