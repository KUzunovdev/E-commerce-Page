import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const location = useLocation();
  const categories = [
    { name: 'Bags', path: '/category/bags' },
    { name: 'Shoes', path: '/category/shoes' },
    { name: 'Watches', path: '/category/watches' },
    { name: 'Hats', path: '/category/hats' },
  ];

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="C4" className="h-10" />
        </Link>
        <nav>
          <ul className="flex space-x-6 text-gray-800">
            {categories.map((category) => (
              <li key={category.path}>
                <Link
                  to={category.path}
                  className={location.pathname === category.path ? "text-black-500 text-xl" : "hover:text-blue-500"}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
