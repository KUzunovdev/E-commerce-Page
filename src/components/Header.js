import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="h-10" />
          </Link>
          <nav>
            <ul className="flex space-x-6 text-gray-800">
              <li>
                <Link to="/category/bags" className="hover:text-blue-500">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/category/shoes" className="hover:text-blue-500">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/category/watches" className="hover:text-blue-500">
                  Watches
                </Link>
              </li>
              <li>
                <Link to="/category/hats" className="hover:text-blue-500">
                  Hats
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };

export default Header;
